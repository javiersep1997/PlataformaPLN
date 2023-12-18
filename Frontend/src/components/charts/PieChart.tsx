import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

const PieChart = ({ chartData, title }: { title: string }) => {
  return (
    <Pie
      data={chartData}
      // size of chart
      width={300}
      height={300}
      options={{
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
            text: title,
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

export default PieChart
