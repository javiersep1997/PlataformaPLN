import PDFParser from 'pdf2json'
import fs from 'fs'
//Functions nlp
import { callPredict2 } from '../libs/vertex.js'
import { analyzeSentiment } from '../libs/nlp.js'
import { getPolarity } from '../utils/polarity.js'

// Leer archivos PDF
const pdfCarpeta = 'src/api/data/pdfs/'
const pdfFiles = fs.readdirSync(pdfCarpeta)
const enunciadoSuperior = 'Respuestas abiertas de las y los estudiantes'
const enunciadoInferior = 'Preguntas para la Reflexión Pedagógica'

// Función para filtrar lineas de texto entre enunciados
const extractAndFilterText = (lines) => {
  const linesBetweenEnunciados = []
  let isBetweenEnunciados = false

  lines.forEach((line) => {
    if (line.includes(enunciadoSuperior)) {
      isBetweenEnunciados = true
    } else if (line.includes(enunciadoInferior)) {
      isBetweenEnunciados = false
    } else if (
      isBetweenEnunciados &&
      !line.startsWith('?') &&
      !line.startsWith('¿') &&
      !line.startsWith('PAGINA') &&
      !line.includes('Break')
    ) {
      linesBetweenEnunciados.push(line)
    }
  })
  const lineasFiltradas = linesBetweenEnunciados.filter(
    (line) => line.length >= 8
  )
  return lineasFiltradas
}


//Procesar cada PDF
export const processPdfs = async () => {
  const resultados = []
  // En la primera parte se centra en abrir cada pdf, extraer el texto y filtrarlo
  await Promise.all(
    pdfFiles.map(async (pdfFile) => {
      // set up pdf parser
      let pdfParser = new PDFParser(this, 1)
      // cargar el archivo PDF
      pdfParser.loadPDF(pdfCarpeta + pdfFile)
      let resultado = await new Promise(async (resolve, reject) => {
        pdfParser.on('pdfParser_dataReady', (pdfData) => {
          const raw = pdfParser.getRawTextContent()
          resolve(raw)
        })
      })
      const lineasProcesadas = extractAndFilterText(resultado.split('\r\n'))
      lineasProcesadas.shift()
      lineasProcesadas.shift()
      resultados.push(lineasProcesadas)
    })
  )

  // Arreglo de arreglos de comentarios proveniente de los pdf
  const respuestas = []
  await Promise.all(
    resultados.map((pdfResultados) => {
      return Promise.all(
        pdfResultados.map(async (respuesta) => {
          const responsemodel = await procesarComentario(respuesta)
          const tag = responsemodel.polarity
          // Con la etiqueta luego pasamos por analyzeSentiment para obtener la polaridad
          const responsenlpApi = await analyzeSentiment(respuesta)
          const polarity = getPolarity(responsenlpApi, tag)

          respuestas.push({
            //Prediccion realizada
            polaridad: polarity,
            respuesta: respuesta,
          })
        })
      )
    })
  )
  return respuestas
}
