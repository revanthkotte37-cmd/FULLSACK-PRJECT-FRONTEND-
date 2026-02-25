import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, StudentTable } from '../../components';
import { Plus, Search } from 'lucide-react';
import { studentsData } from '../../data/dummyData';

export const TeacherStudents = () => {
  const [students] = useState(studentsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterClass, setFilterClass] = useState('');
  const navigate = useNavigate();

  const classes = [...new Set(students.map((s) => s.class))];

  const handleEdit = (studentId) => {
    alert(`Edit functionality would navigate to edit form for student ${studentId}`);
  };

  const handleDelete = (studentId) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      alert(`Student ${studentId} deleted`);
    }
  };

  const handleView = (studentId) => {
    const student = students.find((s) => s.id === studentId);
    alert(`Viewing details for ${student?.name}`);
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Student Management</h1>
            <p className="text-gray-600 mt-2">Manage and view all students</p>
          </div>
          <button
            onClick={() => navigate('/teacher/add-student')}
            className="btn-primary flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
          >
            <Plus size={20} />
            <span>Add Student</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4 md:space-y-0 md:flex md:gap-4">
          <div className="flex-1">
            <label className="label">Search Students</label>
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or email..."
                className="input-field pl-10"
              />
            </div>
          </div>

          <div className="flex-1">
            <label className="label">Filter by Class</label>
            <select
              value={filterClass}
              onChange={(e) => setFilterClass(e.target.value)}
              className="input-field"
            >
              <option value="">All Classes</option>
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Students Table */}
        <StudentTable
          students={students}
          searchTerm={searchTerm}
          filterClass={filterClass}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
        />

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <p className="text-gray-600 text-sm">Total Students</p>
            <p className="text-2xl font-bold text-blue-600">{students.length}</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <p className="text-gray-600 text-sm">Excellent</p>
            <p className="text-2xl font-bold text-green-600">
              {students.filter((s) => s.status === 'excellent').length}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <p className="text-gray-600 text-sm">Good</p>
            <p className="text-2xl font-bold text-blue-600">
              {students.filter((s) => s.status === 'good').length}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <p className="text-gray-600 text-sm">Average</p>
            <p className="text-2xl font-bold text-yellow-600">
              {students.filter((s) => s.status === 'average' || s.status === 'poor').length}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
