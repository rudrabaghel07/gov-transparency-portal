import React, { useMemo } from 'react';
import { formatCurrency, calculatePercentage, getStatusColor, getPriorityBadge } from '../utils/helpers';

const DepartmentTable = ({ departments, searchTerm }) => {
  const filteredDepts = useMemo(() => {
    return departments.filter(dept =>
      dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [departments, searchTerm]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 backdrop-blur bg-white/5">
      <table className="w-full border-collapse">
        <thead className="bg-white/5 backdrop-blur sticky top-0 z-10">
          <tr>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Department</th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Budget</th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Spent</th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Utilization</th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Priority</th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Projects</th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Employees</th>
          </tr>
        </thead>
        <tbody>
          {filteredDepts.map(dept => {
            const percentage = calculatePercentage(dept.spent, dept.budget);
            const statusColor = getStatusColor(percentage);
            return (
              <tr key={dept.id} className="border-b border-white/5 hover:bg-white/5 transition-all duration-300 hover:scale-[1.003]">
                <td className="px-6 py-4">
                  <div className="font-semibold text-white">{dept.name}</div>
                  <div className="text-sm text-gray-400">{dept.category}</div>
                </td>
                <td className="px-6 py-4 font-semibold font-mono text-gray-300">
                  {formatCurrency(dept.budget)}
                </td>
                <td className="px-6 py-4 font-semibold font-mono text-gray-300">
                  {formatCurrency(dept.spent)}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="progress-bar flex-1">
                      <div 
                        className="progress-fill" 
                        style={{width: `${percentage}%`}}
                      ></div>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      statusColor === 'success' ? 'bg-green-900/50 text-green-300 border border-green-500' :
                      statusColor === 'warning' ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-500' :
                      'bg-red-900/50 text-red-300 border border-red-500'
                    }`}>
                      {percentage}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    dept.priority === 'Critical' ? 'bg-red-900/50 text-red-300 border border-red-500' :
                    dept.priority === 'High' ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-500' :
                    'bg-cyan-900/50 text-cyan-300 border border-cyan-500'
                  }`}>
                    {dept.priority}
                  </span>
                </td>
                <td className="px-6 py-4 font-mono text-gray-300">{dept.projects}</td>
                <td className="px-6 py-4 font-mono text-gray-300">{dept.employees.toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentTable;