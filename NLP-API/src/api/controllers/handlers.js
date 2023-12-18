import { analyzeSentiment, analyzeEntitySentiment } from '../libs/nlp.js'
// Procesing Data
import { callPredict1, callPredict2 } from '../libs/vertex.js'
import { cloudWord, processData } from '../utils/cloudWord.js'
import { radar } from '../utils/radar.js'
import { getPolarity } from '../utils/polarity.js'
import { processPdfs } from '../libs/pdf.js'
import { procesarComentario } from '../libs/vertex.js'

//Handlers

//POST : Procesa y analiza la sentimentalidad de un texto con la API de google
export const answerNlp = async (req, res, next) => {
  const { answer } = req.body

  try {
    if (!answer) throw new Error('No answer provided')

    const result = await analyzeSentiment(answer)

    res.status(201).json({
      result: result,
    })
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    })
  }
}

//POST : Procesa y analiza la sentimentalidad de las entidades de un texto
export const answerEntityNlp = async (req, res, next) => {
  const { answer } = req.body

  try {
    if (!answer) throw new Error('No answer provided')
    //Procesos
    const result = await analyzeEntitySentiment(answer)

    res.status(201).json({
      result: result,
    })
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    })
  }
}

//POST : Procesa y analiza la sentimentalidad de un texto con el modelo  1 Entrenado
export const answerModel1 = async (req, res, next) => {
  const { answer } = req.body

  try {
    if (!answer) throw new Error('No answer provided')

    const result = await callPredict1(answer)

    res.status(201).json({
      result: result,
    })
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    })
  }
}

//POST : Procesa y analiza la sentimentalidad de un texto con el modelo 2 Entrenado
export const answerModel2 = async (req, res, next) => {
  const { answer } = req.body

  try {
    if (!answer) throw new Error('No answer provided')

    const result = await callPredict2(answer)

    res.status(201).json({
      result: result,
    })
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    })
  }
}

// Manejador para consulta de procesar lotes de PDF
export const pdfBatch = async (req, res, next) => {
  try {
    processPdfs().then((result) => {
      res.status(201).json({
        result: result,
      })
    })
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    })
  }
}

//POST : Procesa y analiza la sentimentalidad de un texto con la API de google Entregando la información si es positivo o negativo
export const answerNlpPolarity = async (req, res, next) => {
  const { answer } = req.body

  try {
    if (!answer) throw new Error('No answer provided')

    const responseModel = await procesarComentario(answer)
    const tag = responseModel.polarity
    const responsenlpApi = await analyzeSentiment(answer)
    const polarity = getPolarity(responsenlpApi, tag)

    res.status(201).json({
      result: polarity,
      //valores: result,
    })
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    })
  }
}

/// Vamos aqui

//POST : Procesa y analiza la sentimentalidad de las entidades de un texto, ademas de entregar la información como entrada para la nube de palabras
export const answerEntityNlpCloud = async (req, res, next) => {
  const { answer } = req.body

  try {
    if (!answer) throw new Error('No answer provided')
    //Procesos
    const result = await analyzeEntitySentiment(answer)
    const resultCLoud = await processData(result)
    res.status(201).json({
      result: resultCLoud,
    })
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    })
  }
}

//Rutas que ocupan La información estatica/Base de datos

// manejador para grafico de nube de palabras
export const getCloud = async (req, res, next) => {
  try {
    const result1 = await cloudWord('seattledata/')
    const result2 = await cloudWord('bostondata/')

    res.status(201).json({
      entidades1: result1,
      entidades2: result2,
    })
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    })
  }
}
// manejador para grafico de radar
export const getRadar = async (req, res, next) => {
  try {
    // PrimerDataset
    const result1 = await radar('seattledata/')
    // SegundoDataset
    const result2 = await radar('bostondata/')

    res.status(201).json({
      datasetSeattle: result1,
      datasetBoston: result2,
    })
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    })
  }
}
