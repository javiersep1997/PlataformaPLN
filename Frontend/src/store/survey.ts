import { create } from './mainStore'
import { persist } from 'zustand/middleware'
import { Result } from '../interfaces/survey'

// Estado
type surveyState = {
  resultados: {
    formulario1?: Result
    formulario2?: Result
    formulario3?: Result
    formulario4?: Result
  }
}

type Actions = {
  setFormulario1: (res: Result) => Promise<void>
  setFormulario2: (res: Result) => Promise<void>
  setFormulario3: (res: Result) => Promise<void>
  setFormulario4: (res: Result) => Promise<void>
  cleanResults: () => void
}

/* type Actions = {
  setFormulario1: (res: Result) => Promise<void>
  enviarFormulario2: (texto: string) => Promise<void>
  enviarFormulario3: (texto: string) => Promise<void>
  enviarFormulario4: (texto: string) => Promise<void>
  cleanResults: () => void
} */

// Estado inicial
const initialState: surveyState = {
  resultados: {},
}

export const useSurveyStore = create(
  persist<Actions & surveyState>(
    (set) => ({
      // Estado inicial
      ...initialState,
      setFormulario1: async (res: Result) => {
        set((state) => ({
          resultados: {
            ...state.resultados,
            formulario1: res,
          },
        }))
      },
      /* enviarFormulario1: async (texto: string) => {
        console.log(texto)
        const res = await enviarFormulario1Request(texto)
        set((state) => ({
          resultados: {
            ...state.resultados,
            formulario1: res,
          },
        }))
      }, */
      setFormulario2: async (res: Result) => {
        set((state) => ({
          resultados: {
            ...state.resultados,
            formulario2: res,
          },
        }))
      },
      setFormulario3: async (res: Result) => {
        set((state) => ({
          resultados: {
            ...state.resultados,
            formulario3: res,
          },
        }))
      },
      setFormulario4: async (res: Result) => {
        set((state) => ({
          resultados: {
            ...state.resultados,
            formulario4: res,
          },
        }))
      },
      cleanResults: () => {
        set(() => ({
          ...initialState,
        }))
      },
    }),
    {
      name: 'survey-storage',
    }
  )
)
