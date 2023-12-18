import axios from 'axios'
import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import { Result } from '../interfaces/survey'

const BASE_URL = 'http://localhost:5000/api/nlp'

const api = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
})
// pendiente de hacer el fetch
/* async function fetchForm1(context: QueryFunctionContext) {
  const { data } = await api.post<Result>('', {
    answer: context.queryKey[1],
  })
  return data
} */

//
export const formulario1Request = async (texto: string) => {
  const { data } = await api.post<Result>('', {
    answer: texto,
  })
  return data
}

export const formulario2Request = async (texto: string) => {
  const { data } = await api.post<Result>(`/entity`, {
    answer: texto,
  })
  return data
}

export const formulario3Request = async (texto: string) => {
  const { data } = await api.post<Result>(`/model1`, {
    answer: texto,
  })
  return data
}

export const formulario4Request = async (texto: string) => {
  const { data } = await api.post<Result>(`/model2`, {
    answer: texto,
  })
  return data
}
