import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Users, TrendingUp, Award } from 'lucide-react';

export const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12 max-w-2xl">
        <h1 className="text-5xl font-bold text-white mb-4">
          Student Performance Analytics
        </h1>
        <p className="text-xl text-blue-100 mb-8">
          Track, analyze, and improve student performance with our comprehensive reporting system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-5xl">
        <div className="bg-white rounded-lg p-6 shadow-lg text-center">
          <BarChart3 className="text-blue-600 mx-auto mb-3" size={32} />
          <h3 className="font-semibold text-gray-900">Analytics</h3>
          <p className="text-sm text-gray-600">In-depth performance metrics</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-lg text-center">
          <Users className="text-green-600 mx-auto mb-3" size={32} />
          <h3 className="font-semibold text-gray-900">Management</h3>
          <p className="text-sm text-gray-600">Easy student management</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-lg text-center">
          <TrendingUp className="text-yellow-600 mx-auto mb-3" size={32} />
          <h3 className="font-semibold text-gray-900">Progress</h3>
          <p className="text-sm text-gray-600">Track improvement trends</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-lg text-center">
          <Award className="text-red-600 mx-auto mb-3" size={32} />
          <h3 className="font-semibold text-gray-900">Reports</h3>
          <p className="text-sm text-gray-600">Comprehensive reports</p>
        </div>
      </div>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-shadow"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-8 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors"
        >
          Register
        </Link>
      </div>
    </div>
  );
};
