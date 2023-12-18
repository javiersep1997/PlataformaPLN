import type { ChartConfiguration } from 'chart.js'

export const values = [
  {
    datasetSeattle: {
      positive: 260,
      neutral: 204,
      negative: 33,
    },
    datasetBoston: {
      positive: 135,
      neutral: 285,
      negative: 64,
    },
  },
]

export const dataRadar: ChartConfiguration<'radar'>['data'] = {
  labels: ['Positivas', 'Neutras', 'Negativas'],
  datasets: [
    {
      label: 'Resultados del modelo entrenado',
      data: Object.values(values[0].datasetSeattle),
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Resultados de solución propuesta ',
      data: Object.values(values[0].datasetBoston),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)',
    },
  ],
}

// Funcions adicionales para crear los graficos

const positivosSeattle =
  values[0].datasetSeattle.positive_plus + values[0].datasetSeattle.positive
const negativosSeattle =
  values[0].datasetSeattle.negative_plus + values[0].datasetSeattle.negative

const positivosBoston =
  values[0].datasetBoston.positive_plus + values[0].datasetBoston.positive
const negativosBoston =
  values[0].datasetBoston.negative_plus + values[0].datasetBoston.negative

const totalSeattle =
  positivosSeattle +
  negativosSeattle +
  values[0].datasetSeattle.neutral +
  values[0].datasetSeattle.mixtas
const totalBoston =
  positivosBoston +
  negativosBoston +
  values[0].datasetBoston.neutral +
  values[0].datasetBoston.mixtas

// Mostrar relacion de positivos y negativos en cada ciudad

export const dataPolaritySeattle: ChartConfiguration<'pie'>['data'] = {
  labels: ['Positivas', 'Negativas', 'Neutras/Mixtas'],
  datasets: [
    {
      data: [
        Number(((positivosSeattle / totalSeattle) * 100).toFixed(2)),
        Number(((negativosSeattle / totalSeattle) * 100).toFixed(2)),
        Number(
          (
            ((totalSeattle - positivosSeattle - negativosSeattle) /
              totalSeattle) *
            100
          ).toFixed(2)
        ),
      ],
      hoverOffset: 10,
    },
  ],
}

export const dataPolarityBoston: ChartConfiguration<'pie'>['data'] = {
  labels: ['Positivas', 'Negativas', 'Neutras/Mixtas'],
  datasets: [
    {
      data: [
        Number(((positivosBoston / totalSeattle) * 100).toFixed(2)),
        Number(((negativosBoston / totalSeattle) * 100).toFixed(2)),
        Number(
          (
            ((totalBoston - positivosBoston - negativosBoston) / totalBoston) *
            100
          ).toFixed(2)
        ),
      ],
      hoverOffset: 10,
    },
  ],
}
// Mostrar relacion de positivos y negativos entre ciudades
// Positivo entre ciudades
export const dataPolarityPositive: ChartConfiguration<'pie'>['data'] = {
  labels: ['Seatle', 'Boston'],
  datasets: [
    {
      data: [
        Number(
          (
            (positivosSeattle / (positivosSeattle + positivosBoston)) *
            100
          ).toFixed(2)
        ),
        Number(
          (
            (positivosBoston / (positivosSeattle + positivosBoston)) *
            100
          ).toFixed(2)
        ),
      ],
      hoverOffset: 10,
    },
  ],
}

// Negativo entre ciudades
export const dataPolarityNegative: ChartConfiguration<'pie'>['data'] = {
  labels: ['Seatle', 'Boston'],
  datasets: [
    {
      data: [
        Number(
          (
            (negativosSeattle / (negativosSeattle + negativosBoston)) *
            100
          ).toFixed(2)
        ),
        Number(
          (
            (negativosBoston / (negativosSeattle + negativosBoston)) *
            100
          ).toFixed(2)
        ),
      ],
      hoverOffset: 10,
    },
  ],
}
