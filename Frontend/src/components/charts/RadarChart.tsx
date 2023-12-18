import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export interface ChartProps {
  title: string
  value: number
  series: Array<number>
  colors: Array<string>
}

const RadarChart = ({ chartData }) => {
  return (
    <Radar
      data={chartData}
      // size of chart
      width={600}
      height={600}
      options={{
        scales: {
          r: {
            angleLines: {
              display: false,
            },
            suggestedMin: 0,
            suggestedMax: 100,
            pointLabels: {
              font: {
                size: 10,
                style: 'normal',
              },
            },
          },
        },
        responsive: false,
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
          legend: {
            labels: {
              font: {
                size: 15,
                style: 'normal',
              },
            },
            position: 'top',
          },
          title: {
            display: true,
            text: '',
            font: {
              size: 25,
              family: 'sans-serif',
              weight: 'bold',
              lineHeight: 1.6,
            },
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

export default RadarChart
