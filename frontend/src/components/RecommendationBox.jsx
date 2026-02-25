import React from 'react';
import { AlertCircle, Lightbulb } from 'lucide-react';

export const RecommendationBox = ({
  title,
  recommendations,
  type = 'improvement',
  weakSubjects,
}) => {
  const isWarning = type === 'warning' || weakSubjects;

  return (
    <div
      className={`card border-2 ${
        isWarning ? 'border-yellow-500 bg-yellow-50' : 'border-blue-500 bg-blue-50'
      }`}
    >
      <div className="flex items-center space-x-3 mb-4">
        {isWarning ? (
          <>
            <AlertCircle className="text-yellow-600" size={28} />
            <h3 className="text-lg font-semibold text-yellow-900">
              {title || 'Areas to Improve'}
            </h3>
          </>
        ) : (
          <>
            <Lightbulb className="text-blue-600" size={28} />
            <h3 className="text-lg font-semibold text-blue-900">
              {title || 'Suggestions'}
            </h3>
          </>
        )}
      </div>

      {weakSubjects && weakSubjects.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Weak Subjects:</p>
          <div className="flex flex-wrap gap-2">
            {weakSubjects.map((subject, index) => (
              <span
                key={index}
                className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-xs font-medium"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      )}

      <ul className="space-y-2">
        {recommendations &&
          recommendations.map((rec, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-blue-600 font-bold mt-1">✓</span>
              <p className={`text-sm ${isWarning ? 'text-yellow-900' : 'text-blue-900'}`}>
                {rec}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};
