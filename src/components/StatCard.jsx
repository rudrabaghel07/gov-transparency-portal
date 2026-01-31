import React from "react";

const StatCard = ({ title, value, subtitle, icon, trend }) => {
  const isPositive = trend > 0;

  return (
    <div className="relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-purple-500/30 hover:scale-[1.02] transition-all duration-300">
      
      <div className="stat-card h-full rounded-2xl backdrop-blur-xl bg-slate-900/80 p-5 shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
        
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-blue-600/10 to-cyan-400/10"></div>

        <div className="relative z-10 flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-400">{title}</p>
            <h2 className="text-3xl font-bold text-white mt-1">{value}</h2>
            <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
          </div>

          <div className="text-4xl text-white/20 select-none">{icon}</div>
        </div>

        {trend !== undefined && trend !== 0 && (
          <div className="relative z-10 mt-4 flex items-center gap-2">
            <span
              className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${
                isPositive
                  ? "text-green-400 border-green-500/30 bg-green-500/10"
                  : "text-red-400 border-red-500/30 bg-red-500/10"
              }`}
            >
              {isPositive ? "▲" : "▼"} {Math.abs(trend)}%
            </span>
            <span className="text-xs text-gray-500">vs last year</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
