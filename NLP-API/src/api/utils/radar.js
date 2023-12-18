// Funciones para extraer, transformar y cargar datos de la base de datos/ estaticos y enviarlos al front-end en un gráfico de araña o radar chart, son usualmente utiles para comparar los puntos de dos o más datasets.
import fs from 'fs'

// Parametros para el grafico de araña de ejemplo

/* const data = {
  labels: [
    'Realmente positvas',
    'Positivas',
    'Realmente negativas',
    'Negativas',
    'Neutrales',
  ],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
    },
    {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
    },
  ],
} */

//Filtro: Separa las entidades en cinco  categorias de acorde a su campo sentimeny magnitude --> Positivas, Negativas, Neutras, Realmente Positivas y Realmente Negativas
export const textSentiment = (comments) => {
  const resultados = {
    positive_plus: 0,
    positive: 0,
    neutral: 0,
    negative: 0,
    negative_plus: 0,
    mixtas: 0,
  }
  comments.forEach((entity) => {
    // con operador ternario
    entity.scoreText >= 0.55 && entity.magnitudeText >= 3.0
      ? resultados.positive_plus++
      : entity.scoreText > 0.2 &&
        entity.magnitudeText < 3.0 &&
        entity.magnitudeText >= 1.0
      ? resultados.positive++
      : entity.scoreText > -0.2 && entity.scoreText < 0.2
      ? resultados.neutral++
      : entity.scoreText < -0.4 &&
        entity.magnitudeText < 2.0 &&
        entity.magnitudeText >= 1.0
      ? resultados.negative++
      : entity.scoreText <= -0.4 && entity.magnitudeText >= 2.0
      ? resultados.negative_plus++
      : resultados.mixtas++
  })
  return resultados
}
//Funcion procesar JSON y obtener los resultados
export const radar = (carpeta = 'seattledata/') => {
  // array para guardar los resultados
  const resultados = {
    positive_plus: 0,
    positive: 0,
    neutral: 0,
    negative: 0,
    negative_plus: 0,
    mixtas: 0,
  }

  // leer cada archivo JSON
  archivosJson.forEach((archivo) => {
    // Unir la ruta base con el nombre del archivo
    archivo = rutaBase + carpeta + archivo
    // leer el contenido del archivo
    const contenido = fs.readFileSync(archivo, 'utf8')
    // convertir el contenido del archivo a un objeto
    const commentariosObjeto = JSON.parse(contenido)
    // procesar los comentarios
    const comentariosProcesados = textSentiment(commentariosObjeto)
    // sumar los resultados
    resultados.positive_plus += comentariosProcesados.positive_plus
    resultados.positive += comentariosProcesados.positive
    resultados.neutral += comentariosProcesados.neutral
    resultados.negative += comentariosProcesados.negative
    resultados.negative_plus += comentariosProcesados.negative_plus
    resultados.mixtas += comentariosProcesados.mixtas
  })
  return resultados
}

const rutaBase = 'src/api/data/radar/'
const archivosJson = [
  'resultados500.json',
  'resultados1000.json',
  'resultados1500.json',
  'resultados2000.json',
  'resultados2500.json',
  'resultados3000.json',
  'resultados3500.json',
  'resultados4000.json',
  'resultados4500.json',
  'resultados5000.json',
]
