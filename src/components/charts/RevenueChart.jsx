import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.source),
    datasets: [{
      data: data.map(d => d.amount / 1000000000),
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(168, 85, 247, 0.8)',
        'rgba(34, 211, 238, 0.8)'
      ],
      borderColor: 'rgba(30, 41, 59, 1)',
      borderWidth: 2,
      hoverOffset: 10
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#e5e7eb',
          font: { family: 'Sora', size: 11 },
          padding: 15
        }
      }
    }
  };

  return (
    <div className="w-full bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 overflow-hidden">
      <h2 className="text-lg font-semibold text-white mb-4 px-4 pt-4">Revenue Sources</h2>
      <div className="w-full h-64 px-4 pb-4">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
};

export default RevenueChart;