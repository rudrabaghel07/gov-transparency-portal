import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BudgetChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.name),
    datasets: [
      {
        label: 'Budget',
        data: data.map(d => d.budget / 1e9),
        backgroundColor: 'rgba(59,130,246,0.75)',
        hoverBackgroundColor: 'rgba(59,130,246,1)',
        borderRadius: 8,
        barThickness: 26
      },
      {
        label: 'Spent',
        data: data.map(d => d.spent / 1e9),
        backgroundColor: 'rgba(16,185,129,0.75)',
        hoverBackgroundColor: 'rgba(16,185,129,1)',
        borderRadius: 8,
        barThickness: 26
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
      <h2 className="text-lg font-semibold text-white mb-4 px-4 pt-4">Budget Overview</h2>
      <div className="w-full h-64 px-4 pb-4">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BudgetChart;