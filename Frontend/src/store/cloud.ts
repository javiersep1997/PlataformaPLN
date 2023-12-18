import { create } from './mainStore'
import { persist } from 'zustand/middleware'
import { ResultCloud, DataCloud } from '../interfaces/cloud'
import type { ChartConfiguration } from 'chart.js'

type cloudState = {
  cloudData?: DataCloud
}

type Actions = {
  setCloudData: (res: ResultCloud) => Promise<void>
  cleanResults: () => void
}

const initialState: cloudState = {
  cloudData: {
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
      },
    ],
  },
}

export const useCloudStore = create(
  persist<Actions & cloudState>(
    (set) => ({
      ...initialState,
      setCloudData: async (res: ResultCloud) => {
        set((state) => ({
          ...state,
          // perform transformations here
          cloudData: {
            labels: Object.values(res.result).map((item) => item.key),
            datasets: [
              {
                label: 'Nube de palabras Resultante',
                data: Object.values(res.result).map(
                  (item) => 10 + item.value * 100
                ),
              },
            ],
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
      name: 'cloud-storage',
    }
  )
)
