import React from 'react';
import { formatCurrency } from '../utils/helpers';

const ProjectsTable = ({ projects }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 backdrop-blur bg-white/5">
      <table className="w-full border-collapse">
        <thead className="bg-white/5 backdrop-blur sticky top-0 z-10">
          <tr>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Project Name</th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Department</th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Budget</th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Spent</th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Completion</th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Timeline</th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id} className="border-b border-white/5 hover:bg-white/5 transition-all duration-300 hover:scale-[1.003]">
              <td className="px-6 py-4 font-semibold text-white">{project.name}</td>
              <td className="px-6 py-4 text-gray-300">{project.department}</td>
              <td className="px-6 py-4 font-semibold font-mono text-gray-300">
                {formatCurrency(project.budget)}
              </td>
              <td className="px-6 py-4 font-semibold font-mono text-gray-300">
                {formatCurrency(project.spent)}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="progress-bar flex-1">
                    <div 
                      className="progress-fill" 
                      style={{width: `${project.completion}%`}}
                    ></div>
                  </div>
                  <span className="font-mono text-sm text-gray-300">{project.completion}%</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm">
                <div className="text-gray-300">{project.startDate}</div>
                <div className="text-gray-400">{project.endDate}</div>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-900/50 text-cyan-300 border border-cyan-500">
                  {project.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;