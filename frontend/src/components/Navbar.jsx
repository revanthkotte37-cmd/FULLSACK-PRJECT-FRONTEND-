import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Bell, User } from 'lucide-react';

export const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
      <div className="flex-1">
        <h2 className="text-gray-700">
          {user?.role === 'teacher'
            ? 'Student Performance Analytics System'
            : 'My Academic Dashboard'}
        </h2>
      </div>
      
      <div className="flex items-center space-x-6">
        <button className="relative text-gray-600 hover:text-gray-900">
          <Bell size={24} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-3 border-l border-gray-200 pl-6">
          <User size={24} className="text-gray-600" />
          <div className="text-sm">
            <p className="font-medium text-gray-900">{user?.name}</p>
            <p className="text-gray-500 capitalize">{user?.role}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
