//Librerias para estadisticas
import { min, max } from 'd3'
import fs from 'fs'
import { entitiesRepeated, filterEntities } from './processingEntities.js'
import { franc } from 'franc-min'
// Deben ser pensadas para todas las respuestas que deban ser enviadas al grafico, para el uso de las palabras se ocuparán las entidades recolectadas por el API de Google Cloud Natural Language que seran procesadas por las funciones de este archivo

// Parametros del grafico de nube de palabras
/*
  {
    "key: "string", // Nombre de la entidad
    "value": "number" // Importancia de la entidad
  }
*/

// Para llegar a ello primero se trabajara con todas las entidades dentro de los commentarios procesados hacia una pregunta, luego de solicitarlos tendremos todos los comentariosen un arreglo de objetos con la siguiente estructura
/*  const arregloJsonParaPreguntaX = [
  {
    "id":1
    "message": "Answer created",
    "result": {
      "scoreText": 0.699999988079071,
      "magnitudeText": 2.799999952316284,
      "entities": [
        {
          "mentions": 1,
          "name": "muchos",
          "type": "PERSON",
          "salience": 0.3339880108833313,
          "sentiment": {
            "magnitude": 1.100000023841858,
            "score": 0.10000000149011612
          }
        },
        // ... más objetos dentro de "entities"
      ]
    }
  },
  // ... más objetos JSON en el arreglo tipo "result"
];*/

// Es Juntar todas las entidades de todos los comentarios en un solo json
const mergeEntities = (arrayComments) => {
  let todasEntidades = arrayComments.reduce((acumulador, obj) => {
    const entidades = obj.entities
    return acumulador.concat(entidades)
  }, [])
  return todasEntidades
}

// Extraer las entidades y las menciones de estas dentro de los comentarios
const entitiesProcessing = (entities) => {
  // Filtro de repetidas
  entities = entitiesRepeated(entities)
  // Filtro por las condiciones
  entities = filterEntities(entities)
  return {
    entities: entities,
  }
}

// Ponderar las entidades de acuerdo a sus menciones, dandole peso a las entidades con más menciones
// En este caso entities es un solo json que dentro tiene array llamado entities con todos los entities
const ponderar = ({ entities }, factor = 2) => {
  const entitiesPonderadas = entities.map((d) => ({
    ...d,
    salience: d.salience * (factor * d.mentions),
  }))
  return entitiesPonderadas
}

// Funciones para la nube
//Estandarización de los commentarios de acuerdo a su salience

const estandarizar = (entities) => {
  // Obtener los valores de "salience"
  const salienceValues = entities.map((d) => d.salience)
  // Calcular el mínimo y el máximo de los valores de "salience"
  const minSalience = min(salienceValues)
  const maxSalience = max(salienceValues)

  // Normalizar los valores de "salience"
  const datosNormalizados = entities.map((d) => ({
    ...d,
    salienceNormalizado:
      (d.salience - minSalience) / (maxSalience - minSalience),
  }))
  return datosNormalizados
}

// Realizamos llave valor para entregar al grafico de nube de palabras, además de escalar por un factor para la representación en el grafico
const limpiarCloud = (entities, factor = 1) => {
  const resultado = entities.map((d) => ({
    key: d.name,
    value: d.salience * factor,
  }))
  // Nos quedaremos con las 200 entidades más importantes para el grafico
  // Las cuales seran las 200 con mayor salience
  resultado.sort((a, b) => b.value - a.value)
  resultado.splice(200, resultado.length - 200)

  return resultado
}

// Limpiamos los pares key value que no correspondan al idioma seleccionado
const cleanLanguage = (entities, language = 'spa') => {
  const resultado = entities.filter((d) => franc(d.key) === language)
  return resultado
}

// Funcion para procesar JSON y obtener resultados
export const cloudWord = (carpeta = 'seattledata/') => {
  const entidadesAcumulador = []

  // leer cada archivo JSON
  archivosJson.forEach((archivo) => {
    // Unir la ruta base con el nombre del archivo
    archivo = rutaBase + carpeta + archivo
    // leer el contenido del archivo
    const contenido = fs.readFileSync(archivo, 'utf8')
    // convertir el contenido del archivo a un objeto
    const entidadesObjeto = JSON.parse(contenido)
    // unir entidades de todo el archivo
    const entidades = mergeEntities(entidadesObjeto)
    // Juntar todas las entidades de todos los comentarios en un solo arreglo
    entidadesAcumulador.push(entidades)
  })
  console.log(entidadesAcumulador[0])
  const entidadesFiltradas = entitiesProcessing(entidadesAcumulador[0])
  const entidadesProcesadas = processData(entidadesFiltradas)
  return entidadesProcesadas
}
// Funcion que procesa la información de las entidades
export const processData = (entities) => {
  //Filtros
  // Ponderar las entidades de acuerdo a sus menciones
  const entidadesPonderadas = ponderar(entities)
  // Estandarización de los commentarios de acuerdo a su salience
  const entidadesEstandarizadas = estandarizar(entidadesPonderadas)
  // Realizamos llave-valor para entregar al grafico de nube de palabras
  const entidadesLlaveValor = limpiarCloud(entidadesEstandarizadas)
  // Limpiamos los pares key value que no correspondan al idioma seleccionado
  /* const entidadesLimpio = cleanLanguage(entidadesLlaveValor, 'eng') */
  return entidadesLlaveValor
}

// Probar con datos de prueba para el grafico de nube de palabras
const rutaBase = 'src/api/data/cloud/'
const archivosJson = [
  'resultados100.json',
  'resultados300.json',
  'resultados400.json',
  'resultados600.json',
  'resultados1000.json',
]
