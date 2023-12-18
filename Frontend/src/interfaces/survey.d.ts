enum Type {
  Location = 'LOCATION',
  Other = 'OTHER',
  Person = 'PERSON',
}

interface Sentiment {
  magnitude: number
  score: number
}

interface Entity {
  mentions: number
  name: string
  type: Type
  salience: number
  sentiment: Sentiment
}

interface ResultNLP {
  scoreText?: number
  magnitudeText?: number
  polarity?: number
}
interface ResultEntities {
  entities?: Entity[]
}

interface Result {
  result: ResultNLP & ResultEntities
}

export { Result, ResultNLP }
