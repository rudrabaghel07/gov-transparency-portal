import { useMemo, useState } from 'react';
import CategoryBreakdown from './components/CategoryBreakdown';
import DepartmentTable from './components/DepartmentTable';
import Header from './components/Header';
import ProjectsTable from './components/ProjectsTable';
import StatCard from './components/StatCard';
import TransactionsTable from './components/TransactionsTable';
import BudgetChart from './components/charts/BudgetChart';
import RevenueChart from './components/charts/RevenueChart';
import TrendChart from './components/charts/TrendChart';
import { governmentData } from './data/governmentData';
import { calculatePercentage, formatCurrency, getStatusColor } from './utils/helpers';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const totalBudget = useMemo(() => 
    governmentData.departments.reduce((sum, dept) => sum + dept.budget, 0),
    []
  );

  const totalSpent = useMemo(() => 
    governmentData.departments.reduce((sum, dept) => sum + dept.spent, 0),
    []
  );

  const totalSurplus = totalBudget - totalSpent;
  const utilizationRate = calculatePercentage(totalSpent, totalBudget);

  return (
    <div className="min-h-screen grid-pattern">
      <Header totalBudget={totalBudget} />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Budget" 
            value={formatCurrency(totalBudget)}
            subtitle="FY 2024 Allocation"
            icon="💰"
            trend={6.6}
          />
          <StatCard 
            title="Total Spent" 
            value={formatCurrency(totalSpent)}
            subtitle={`${utilizationRate}% Utilized`}
            icon="📊"
            trend={1.1}
          />
          <StatCard 
            title="Surplus" 
            value={formatCurrency(totalSurplus)}
            subtitle="Remaining Budget"
            icon="💵"
            trend={-23.5}
          />
          <StatCard 
            title="Departments" 
            value={governmentData.departments.length}
            subtitle={`${governmentData.projects.length} Active Projects`}
            icon="🏛️"
          />
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-700 overflow-x-auto py-2">
          {['overview', 'departments', 'projects', 'transactions', 'analytics'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-6">5-Year Budget Trend</h2>
              <TrendChart data={governmentData.yearlyTrends} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card">
                <h2 className="text-2xl font-bold text-white mb-6">Department Budget Comparison</h2>
                <BudgetChart data={governmentData.departments.slice(0, 6)} />
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-white mb-6">Revenue Sources</h2>
                <RevenueChart data={governmentData.revenue} />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Category Breakdown</h2>
              <CategoryBreakdown departments={governmentData.departments} />
            </div>
          </div>
        )}

        {activeTab === 'departments' && (
          <div className="space-y-6">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search departments..."
                className="search-input flex-1 px-4 py-2 bg-slate-800 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-6">Department Budget Overview</h2>
              <DepartmentTable departments={governmentData.departments} searchTerm={searchTerm} />
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="card">
            <h2 className="text-2xl font-bold text-white mb-6">Active Projects</h2>
            <ProjectsTable projects={governmentData.projects} />
          </div>
        )}

        {activeTab === 'transactions' && (
          <div className="card">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Transactions</h2>
            <TransactionsTable transactions={governmentData.transactions} />
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card">
                <h2 className="text-2xl font-bold text-white mb-6">Top Spending Departments</h2>
                <BudgetChart data={governmentData.departments.sort((a, b) => b.spent - a.spent).slice(0, 6)} />
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-white mb-6">Budget Efficiency</h2>
                <div className="space-y-4">
                  {governmentData.departments
                    .sort((a, b) => (b.spent / b.budget) - (a.spent / a.budget))
                    .slice(0, 8)
                    .map(dept => {
                      const percentage = calculatePercentage(dept.spent, dept.budget);
                      const statusColor = getStatusColor(percentage);
                      return (
                        <div key={dept.id}>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-300">{dept.name}</span>
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
                      );
                    })}
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-6">Year-over-Year Analysis</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {governmentData.yearlyTrends.map(year => (
                  <div key={year.year} className="stat-card">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-2">{year.year}</div>
                      <div className="space-y-2 text-sm">
                        <div>
                          <div className="text-gray-400">Budget</div>
                          <div className="font-semibold font-mono text-gray-200">
                            {formatCurrency(year.totalBudget)}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-400">Spent</div>
                          <div className="font-semibold font-mono text-gray-200">
                            {formatCurrency(year.totalSpent)}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-400">Surplus</div>
                          <div className="font-semibold font-mono text-green-400">
                            {formatCurrency(year.surplus)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p className="text-sm">Government Data Transparency Portal • FY 2024 • Data updated in real-time</p>
          <p className="text-xs mt-2">Built with React + Vite + Tailwind CSS • All data is sourced from public sector budget datasets</p>
        </div>
      </footer>
    </div>
  );
}

export default App;