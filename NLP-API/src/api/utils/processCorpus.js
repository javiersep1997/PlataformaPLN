import fs from 'fs'
import { analyzeSentiment, analyzeEntitySentiment } from '../libs/nlp.js'

// Configuración
const languaje = 'en'
const inicio = 500
const final = 1000
// Ruta del archivo JSON
const rutaEntrada = 'C:/Users/javie/Documents/temp/csv/reviewsSeattle.json'
const rutaSalida =
  'C:/Users/javie/Documents/temp/csv/resultados' + final.toString() + '.json'

const procesarCommentarios = async () => {
  return new Promise((resolve, reject) => {
    // Leer el archivo JSON
    fs.readFile(rutaEntrada, 'utf8', async (error, data) => {
      if (error) {
        reject('Error al leer el archivo JSON: ' + error)
        return
      }

      try {
        // Convertir el contenido del archivo en un array de objetos
        let comentarios = JSON.parse(data)
        // Limitar comentarios
        comentarios = comentarios.slice(inicio, final)

        // Limpiar los saltos de línea en cada comentario
        const comentariosLimpios = comentarios.map((comentario) => {
          if (comentario.comments) {
            comentario.comments = comentario.comments.replace(/\n/g, '')
          }
          return comentario
        })
        const comentariosProcesados = []
        /* // Aplicar la función asíncrona a cada comentario
        // Secuencial
        for (const comentario of comentariosLimpios) {
          const resultado = await procesarComentario(comentario.comments)
          comentariosProcesados.push(resultado)
        } */
        // Paralelo
        await Promise.all(
          comentariosLimpios.map(async (comentario) => {
            const resultado = await nlpCommentario(comentario.comments)
            comentariosProcesados.push(resultado)
          })
        )

        // Guardar los comentarios limpios en la variable "comentarios"
        resolve(comentariosProcesados)
      } catch (parseError) {
        reject('Error al analizar el contenido del archivo JSON: ' + parseError)
      }
    })
  })
}

// Función asincrónica para procesar un comentario
const nlpCommentario = async (comentario) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Llamada de la API de Google Cloud Natural Language
      // para ver las entidades o bien los del texto
      try {
        resolve(analyzeEntitySentiment(comentario, languaje))
      } catch (error) {
        reject('Error al analizar el comentario: ' + error)
      }
    }, 1000)
  })
}

//Funcion para guardar los resultados en un archivo JSON
const guardarResultados = (comentarios) => {
  // Ruta del archivo JSON

  // Convertir el array de objetos en un string JSON
  const comentariosJson = JSON.stringify(comentarios, null, 2)

  // Guardar el string JSON en el archivo
  fs.writeFile(rutaSalida, comentariosJson, (error) => {
    if (error) {
      console.error('Error al guardar el archivo JSON: ' + error)
      return
    }
    console.log('Archivo JSON guardado')
  })
}

// Llamar a la función asincrónica y manejar el resultado
console.time('Tiempo de ejecución')
procesarCommentarios()
  .then((comentarios) => {
    guardarResultados(comentarios)
    // Utilizar la variable "comentarios" según sea necesario
    console.log('Comentarios Procesados', comentarios.length)
    console.timeEnd('Tiempo de ejecución')
  })
  .catch((error) => {
    console.error(error)
  })
