export type KeyPair = {
  key: string
  value: number
}
export type ResultCloud = {
  result: KeyPair[]
}

export type Dataset = {
  label: string
  data: number[]
}
export type DataCloud = {
  labels: string[]
  datasets: Dataset[]
}
