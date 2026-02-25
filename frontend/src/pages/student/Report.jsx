import React from 'react';
import { Layout, LineChartComponent } from '../../components';
import { Download, FileText } from 'lucide-react';
import { examHistory, performanceHistory, studentsData } from '../../data/dummyData';

export const StudentReport = () => {
  const currentStudent = studentsData[0];
  const overallAverage = Math.round(
    examHistory.reduce((sum, exam) => sum + exam.percentage, 0) / examHistory.length
  );

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">My Report Card</h1>
            <p className="text-gray-600 mt-2">View your academic performance history</p>
          </div>
          <button className="btn-primary bg-blue-600 hover:bg-blue-700 flex items-center space-x-2">
            <Download size={20} />
            <span>Download Report</span>
          </button>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-md">
            <p className="text-sm text-blue-100 mb-2">Overall Average</p>
            <p className="text-3xl font-bold">{overallAverage}%</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-md">
            <p className="text-sm text-green-100 mb-2">Exams Taken</p>
            <p className="text-3xl font-bold">{examHistory.length}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-md">
            <p className="text-sm text-purple-100 mb-2">Current Class</p>
            <p className="text-3xl font-bold">{currentStudent.class}</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-6 text-white shadow-md">
            <p className="text-sm text-yellow-100 mb-2">Attendance</p>
            <p className="text-3xl font-bold">{currentStudent.attendance}%</p>
          </div>
        </div>

        {/* Progress Chart */}
        <LineChartComponent
          data={performanceHistory}
          title="Performance Progress Over Time"
          xKey="month"
          yKey="percentage"
          color="#3b82f6"
        />

        {/* Exam History */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
            <FileText className="text-blue-600" size={28} />
            <span>Exam History</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Exam Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Percentage
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Grade</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {examHistory.map((exam) => (
                  <tr key={exam.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{exam.examName}</td>
                    <td className="px-6 py-4 text-gray-700">{exam.date}</td>
                    <td className="px-6 py-4 text-gray-700">{exam.percentage}%</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getGradeColor(
                          exam.percentage
                        )}`}
                      >
                        {getGrade(exam.percentage)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Subject-wise Performance Details */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Subject-wise Breakdown</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentStudent.subjects.map((subject) => (
              <div key={subject.subject} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-900">{subject.subject}</h3>
                  <span
                    className={`text-lg font-bold ${getTextColor(subject.marks)}`}
                  >
                    {subject.marks}%
                  </span>
                </div>
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full transition-all ${getMarkColor(subject.marks)}`}
                    style={{ width: `${subject.marks}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Download Your Report</h3>
            <p className="text-gray-600 mb-6">
              Get a detailed PDF copy of your academic performance report
            </p>
            <button className="btn-primary bg-blue-600 hover:bg-blue-700 inline-flex items-center space-x-2">
              <Download size={20} />
              <span>Download PDF Report</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

function getGrade(percentage) {
  if (percentage >= 90) return 'A+';
  if (percentage >= 80) return 'A';
  if (percentage >= 70) return 'B';
  if (percentage >= 60) return 'C';
  return 'D';
}

function getGradeColor(percentage) {
  if (percentage >= 80) return 'bg-green-100 text-green-800';
  if (percentage >= 70) return 'bg-blue-100 text-blue-800';
  if (percentage >= 60) return 'bg-yellow-100 text-yellow-800';
  return 'bg-red-100 text-red-800';
}

function getMarkColor(marks) {
  if (marks >= 80) return 'bg-green-500';
  if (marks >= 70) return 'bg-blue-500';
  if (marks >= 60) return 'bg-yellow-500';
  return 'bg-red-500';
}

function getTextColor(marks) {
  if (marks >= 80) return 'text-green-600';
  if (marks >= 70) return 'text-blue-600';
  if (marks >= 60) return 'text-yellow-600';
  return 'text-red-600';
}
