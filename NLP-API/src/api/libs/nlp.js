import { LanguageServiceClient } from '@google-cloud/language'
import { entitiesProcessing } from '../utils/processingEntities.js'

// Detecta la sentimentalidad del texto
export const analyzeSentiment = async (text, language = 'es') => {
  // Instancia el cliente
  const client = new LanguageServiceClient()

  const document = {
    content: text,
    type: 'PLAIN_TEXT',
    language: language,
  }
  // uso de metodo
  const [resultText] = await client.analyzeSentiment({ document: document })
  const sentiment = resultText.documentSentiment

  return {
    scoreText: sentiment.score,
    magnitudeText: sentiment.magnitude,
  }
}

// Detecta la sentimentalidad del texto y las entidades de un comentario
export const analyzeEntitySentiment = async (text, language = 'es') => {
  // Instantiates a client
  const client = new LanguageServiceClient()

  const document = {
    content: text,
    type: 'PLAIN_TEXT',
    language: language,
  }

  // Detects sentiment of entities in the document
  const [resultEntities] = await client.analyzeEntitySentiment({ document })

  const entities = resultEntities.entities

  // Rescribimos el arreglo de entidades para solo incluir la información que procesaremos, name, type, score, magnitude y salience
  entities.forEach((entity) => {
    delete entity.metadata
    entity.mentions = entity.mentions.length
  })

  //Procesamos las entidades
  const entitiesProccesed = entitiesProcessing(entities)

  return {
    entities: entitiesProccesed.entities,
  }
}
