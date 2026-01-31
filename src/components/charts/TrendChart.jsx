import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const TrendChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.year),
    datasets: [
      {
        label: 'Total Budget',
        data: data.map(d => d.totalBudget / 1000000000),
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      }
    ]
  };

  const options = {
  responsive: true,
  maintainAspectRatio: false,

  interaction: {
    mode: "index",
    intersect: false
  },

  plugins: {
    legend: {
      labels: {
        color: "#e5e7eb",
        font: { family: "Sora", size: 12 }
      }
    },
    tooltip: {
      backgroundColor: "rgba(15,23,42,0.95)",
      titleColor: "#fff",
      bodyColor: "#cbd5e1",
      borderColor: "rgba(59,130,246,0.4)",
      borderWidth: 1,
      callbacks: {
        label: (ctx) => `₹${ctx.parsed.y}B`
      }
    }
  },

  scales: {
    x: {
      type: "category",
      ticks: { color: "#cbd5e1" },
      grid: { color: "rgba(148,163,184,0.12)" }
    },
    y: {
      type: "linear",
      beginAtZero: true,
      ticks: {
        color: "#cbd5e1",
        callback: (value) => `₹${value}B`
      },
      grid: { color: "rgba(148,163,184,0.12)" }
    }
  }
};

  return (
    <div className="w-full bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 overflow-hidden">
      <h2 className="text-lg font-semibold text-white mb-4 px-4 pt-4">Trend Analysis</h2>
      <div className="w-full h-64 px-4 pb-4">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default TrendChart;