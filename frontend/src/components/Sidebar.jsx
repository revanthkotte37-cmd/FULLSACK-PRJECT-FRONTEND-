import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  FileText,
  LogOut,
  BarChart3,
  Plus,
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export const Sidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const isTeacher = user.role === 'teacher';
  const basePath = isTeacher ? '/teacher' : '/student';

  const menuItems = isTeacher ? [
    { icon: Home, label: 'Dashboard', path: '/teacher/dashboard' },
    { icon: Users, label: 'Students', path: '/teacher/students' },
    { icon: Plus, label: 'Add Student', path: '/teacher/add-student' },
    { icon: BarChart3, label: 'Reports', path: '/teacher/reports' },
  ] : [
    { icon: Home, label: 'Dashboard', path: '/student/dashboard' },
    { icon: FileText, label: 'My Report', path: '/student/report' },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-blue-800 to-blue-900 text-white min-h-screen p-6 shadow-lg">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">
          {isTeacher ? '👨‍🏫 Teacher' : '👨‍🎓 Student'}
        </h1>
        <p className="text-sm text-blue-200 mt-1">{user.name}</p>
      </div>

      <nav className="space-y-2 mb-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 shadow-md'
                  : 'hover:bg-blue-700'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-blue-700 pt-4">
        <button
          onClick={logout}
          className="flex items-center space-x-3 px-4 py-3 rounded-lg w-full text-left hover:bg-red-600 transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};
