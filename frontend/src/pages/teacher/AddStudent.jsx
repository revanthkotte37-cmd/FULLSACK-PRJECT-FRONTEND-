import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components';
import { ArrowLeft } from 'lucide-react';

export const AddStudent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    class: '',
    subjects: [
      { subject: 'Mathematics', marks: '' },
      { subject: 'Science', marks: '' },
      { subject: 'English', marks: '' },
    ],
    attendance: '',
    remarks: '',
  });

  const classes = ['10A', '10B', '9A', '9B'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubjectChange = (index, value) => {
    const newSubjects = [...formData.subjects];
    newSubjects[index].marks = value;
    setFormData((prev) => ({
      ...prev,
      subjects: newSubjects,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.class) {
      alert('Please fill all required fields');
      return;
    }
    alert('Student added successfully!');
    navigate('/teacher/students');
  };

  return (
    <Layout>
      <div className="space-y-6 max-w-2xl">
        {/* Header */}
        <button
          onClick={() => navigate('/teacher/students')}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-4"
        >
          <ArrowLeft size={20} />
          <span>Back to Students</span>
        </button>

        <div>
          <h1 className="text-4xl font-bold text-gray-900">Add New Student</h1>
          <p className="text-gray-600 mt-2">Fill in the student details below</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Enter student name"
                    required
                  />
                </div>

                <div>
                  <label className="label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="student@school.com"
                    required
                  />
                </div>

                <div>
                  <label className="label">Class *</label>
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  >
                    <option value="">Select Class</option>
                    {classes.map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label">Attendance (%)</label>
                  <input
                    type="number"
                    name="attendance"
                    value={formData.attendance}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="0-100"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
            </div>

            {/* Marks by Subject */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Marks</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {formData.subjects.map((subject, index) => (
                  <div key={index}>
                    <label className="label">{subject.subject} Marks</label>
                    <input
                      type="number"
                      value={subject.marks}
                      onChange={(e) => handleSubjectChange(index, e.target.value)}
                      className="input-field"
                      placeholder="0-100"
                      min="0"
                      max="100"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Remarks */}
            <div>
              <label className="label">Remarks / Notes</label>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleInputChange}
                className="input-field"
                placeholder="Any additional remarks about the student"
                rows="4"
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-end">
              <button
                type="button"
                onClick={() => navigate('/teacher/students')}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary bg-blue-600 hover:bg-blue-700">
                Add Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
