import React from 'react';
import { formatCurrency } from '../utils/helpers';

const TransactionsTable = ({ transactions }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 backdrop-blur bg-white/5">
      <table className="w-full border-collapse">
        <thead className="bg-white/5 backdrop-blur sticky top-0 z-10">
          <tr>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Date</th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Department</th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Category</th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Amount</th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Vendor</th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-300">Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(txn => (
            <tr key={txn.id} className="border-b border-white/5 hover:bg-white/5 transition-all duration-300 hover:scale-[1.003]">
              <td className="px-6 py-4 font-mono text-sm text-gray-300">{txn.date}</td>
              <td className="px-6 py-4 text-gray-300">{txn.department}</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-900/50 text-cyan-300 border border-cyan-500">
                  {txn.category}
                </span>
              </td>
              <td className="px-6 py-4 font-semibold font-mono text-gray-300">
                {formatCurrency(txn.amount)}
              </td>
              <td className="px-6 py-4 text-gray-300">{txn.vendor}</td>
              <td className="px-6 py-4 text-sm text-gray-400">{txn.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;