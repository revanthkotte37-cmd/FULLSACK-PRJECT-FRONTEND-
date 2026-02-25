import React from 'react';

export const DashboardCard = ({
  title,
  value,
  icon: Icon,
  subtitle,
  color = 'blue',
  trend,
  trendDirection,
}) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    yellow: 'from-yellow-500 to-yellow-600',
    red: 'from-red-500 to-red-600',
    purple: 'from-purple-500 to-purple-600',
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} rounded-xl shadow-lg p-6 text-white card`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-opacity-80 text-white">{title}</p>
          <h3 className="text-3xl font-bold mt-2">{value}</h3>
          {subtitle && <p className="text-sm text-opacity-70 mt-1">{subtitle}</p>}
        </div>
        {Icon && <Icon size={40} className="text-opacity-30 text-white" />}
      </div>
      {trend && (
        <div className={`flex items-center space-x-2 text-sm ${trendDirection === 'up' ? 'text-green-200' : 'text-red-200'}`}>
          <span>{trendDirection === 'up' ? '📈' : '📉'} {trend}</span>
        </div>
      )}
    </div>
  );
};
