import React from "react";

const Header = ({ totalBudget }) => {
  return (
    <header className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
      
      {/* glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight gradient-text">
              Government Data Transparency Portal
            </h1>
            <p className="mt-3 text-slate-300 max-w-2xl">
              Interactive analytics dashboard for monitoring public sector budgets,
              spending patterns, and departmental efficiency in real time.
            </p>

            <div className="mt-6 flex gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs border border-blue-500/30">
                FY 2024
              </span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs border border-cyan-500/30">
                Live Data
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs border border-emerald-500/30">
                Analytics Mode
              </span>
            </div>
          </div>

          <div className="text-right card max-w-sm">
            <p className="text-sm text-slate-400">Total National Budget</p>
            <p className="text-4xl font-extrabold text-white mt-1">
              ₹{(totalBudget / 1_000_000_000_000).toFixed(2)}T
            </p>
            <p className="text-xs text-slate-400 mt-1">Fiscal Year 2024</p>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
