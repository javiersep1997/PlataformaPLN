import axios from 'axios'
import { ResultCloud } from '../interfaces/cloud'

const BASE_URL = 'http://localhost:5000/api/nlp'

const api = axios.create({
  baseURL: BASE_URL,
})
// Rehacer con react-query
export const CloudRequest = async (texto: string) => {
  const { data } = await api.post<ResultCloud>(`/entity/cloud`, {
    answer: texto,
  })
  return data
}
