import React, { useMemo } from 'react';
import { formatCurrency, calculatePercentage, getStatusColor } from '../utils/helpers';

const CategoryBreakdown = ({ departments }) => {
  const categoryData = useMemo(() => {
    const categories = {};
    departments.forEach(dept => {
      if (!categories[dept.category]) {
        categories[dept.category] = { budget: 0, spent: 0, count: 0 };
      }
      categories[dept.category].budget += dept.budget;
      categories[dept.category].spent += dept.spent;
      categories[dept.category].count += 1;
    });
    return Object.entries(categories).map(([name, data]) => ({
      name,
      ...data
    }));
  }, [departments]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categoryData.map(cat => {
        const percentage = calculatePercentage(cat.spent, cat.budget);
        const statusColor = getStatusColor(percentage);
        return (
          <div key={cat.name} className="card">
            <h3 className="text-xl font-bold text-white mb-4">{cat.name}</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Budget</span>
                  <span className="font-semibold font-mono text-gray-200">
                    {formatCurrency(cat.budget)}
                  </span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Spent</span>
                  <span className="font-semibold font-mono text-gray-200">
                    {formatCurrency(cat.spent)}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Utilization</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    statusColor === 'success' ? 'bg-green-900/50 text-green-300 border border-green-500' :
                    statusColor === 'warning' ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-500' :
                    'bg-red-900/50 text-red-300 border border-red-500'
                  }`}>
                    {percentage}%
                  </span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{width: `${percentage}%`}}
                  ></div>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                {cat.count} Department{cat.count > 1 ? 's' : ''}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryBreakdown;