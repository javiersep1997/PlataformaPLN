import * as sdk from '@google-cloud/aiplatform'
import { config } from 'dotenv'
config()

/* 
const projectId = '905882468314'
const location = 'us-central1'
const endpointId = '3214087992268292096' 
*/

//Importamos Los modelos y las rutas de la API
const LOCATION = process.env.LOCATION
const PROJECT_ID = process.env.PROJECT_ID
const ENDPOINT1_ID = process.env.ENDPOINT1_ID
const ENDPOINT2_ID = process.env.ENDPOINT2_ID

// Llama al modelo 1
export const callPredict1 = async (text) => {
  // Specifies the location of the api endpoint
  const clientOptions = {
    apiEndpoint: 'us-central1-aiplatform.googleapis.com',
  }
  // Import the helper module for converting arbitrary protobuf.Value objects.
  const { helpers } = sdk

  // Instantiates a client
  const predictionServiceClient = new sdk.PredictionServiceClient(clientOptions)

  // Configure the parent resource
  const endpoint = `projects/${PROJECT_ID}/locations/${LOCATION}/endpoints/${ENDPOINT1_ID}`

  const instance = {
    mimeType: 'text/plain',
    content: text,
  }
  // Body Request
  const instanceValue = helpers.toValue(instance)
  const instances = [instanceValue]
  const request = {
    endpoint,
    instances,
  }

  // Predict request
  const [response] = await predictionServiceClient.predict(request)

  const predictions = response.predictions

  // Return tag
  const polarityValue = predictions[0].structValue.fields.sentiment.numberValue
  return {
    polarity: polarityValue,
  }
}

// Llama al modelo 2
export const callPredict2 = async (text) => {
  const clientOptions = {
    apiEndpoint: 'us-central1-aiplatform.googleapis.com',
  }
  const { helpers } = sdk
  const predictionServiceClient = new sdk.PredictionServiceClient(clientOptions)
  const endpoint = `projects/${PROJECT_ID}/locations/${LOCATION}/endpoints/${ENDPOINT2_ID}`

  const instance = {
    mimeType: 'text/plain',
    content: text,
  }
  const instanceValue = helpers.toValue(instance)
  const instances = [instanceValue]
  const request = {
    endpoint,
    instances,
  }

  const [response] = await predictionServiceClient.predict(request)
  const predictions = response.predictions
  const polarityValue = predictions[0].structValue.fields.sentiment.numberValue
  return {
    polarity: polarityValue,
  }
}

//Funcion para procesar cada texto por el modelo2 de Vertex
export const procesarComentario = async (comentario) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Llamada de la API
      try {
        resolve(callPredict2(comentario))
      } catch (error) {
        reject('Error al analizar el comentario: ' + error)
      }
    }, 1000)
  })
}
