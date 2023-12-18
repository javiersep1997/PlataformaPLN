import { Router } from 'express'
import {
  answerNlp,
  answerNlpPolarity,
  answerEntityNlp,
  answerEntityNlpCloud,
  answerModel1,
  answerModel2,
  getCloud,
  getRadar,
  pdfBatch,
} from '../controllers/index.js'
const router = Router()

router.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept'
  )
  next()
})

router.post('/nlp', answerNlp)
router.post('/nlp/entity', answerEntityNlp)
router.post('/nlp/model1', answerModel1)
router.post('/nlp/model2', answerModel2)
router.get('/nlp/pdf', pdfBatch)
router.post('/nlp/polarity', answerNlpPolarity)
router.post('/nlp/entity/cloud', answerEntityNlpCloud)
router.get('/graph/cloud', getCloud)
router.get('/graph/radar', getRadar)

export default router
