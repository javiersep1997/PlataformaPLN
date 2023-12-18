import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'
import { WordCloudController, WordElement } from 'chartjs-chart-wordcloud'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  WordCloudController,
  WordElement
)

const dynamicColors = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}

const CloudChart = ({ chartData }) => {
  /*  
  const coloR = []
  for (const i in chartData.labels) {
    coloR.push(dynamicColors())
  } */

  return (
    <Chart
      type="wordCloud"
      data={chartData}
      // size of chart
      width={600}
      height={600}
      options={{
        /* color: coloR, */
        color: 'random-dark',
        responsive: false,
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
          title: {
            display: false,
            text: '',
            font: {
              size: 25,
              style: 'normal',
            },
          },
          legend: {
            labels: {
              font: {
                size: 15,
                style: 'normal',
              },
              color: 'black',
            },
            position: 'top',
          },
        },
        elements: {
          line: {
            borderWidth: 3,
          },
        },
      }}
    />
  )
}

export default CloudChart
