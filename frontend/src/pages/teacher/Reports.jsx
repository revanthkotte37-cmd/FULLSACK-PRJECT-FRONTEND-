import React, { useState } from 'react';
import {
  Layout,
  BarChartComponent,
  LineChartComponent,
  RecommendationBox,
  DashboardCard,
} from '../../components';
import { Download, TrendingUp } from 'lucide-react';
import { studentsData, performanceHistory } from '../../data/dummyData';

export const TeacherReports = () => {
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const selectedStudent = selectedStudentId
    ? studentsData.find((s) => s.id === parseInt(selectedStudentId))
    : null;

  const chartData = selectedStudent
    ? selectedStudent.subjects.map((subject) => ({
        subject: subject.subject.substring(0, 3),
        marks: subject.marks,
      }))
    : [];

  const getWeakSubjects = (student) => {
    if (!student) return [];
    return student.subjects
      .filter((s) => s.marks < 65)
      .map((s) => s.subject);
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Student Reports</h1>
          <p className="text-gray-600 mt-2">Generate and view detailed student reports</p>
        </div>

        {/* Student Selection */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <label className="label">Select Student</label>
          <select
            value={selectedStudentId || ''}
            onChange={(e) => setSelectedStudentId(e.target.value)}
            className="input-field max-w-md"
          >
            <option value="">-- Select a Student --</option>
            {studentsData.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name} ({student.class})
              </option>
            ))}
          </select>
        </div>

        {selectedStudent && (
          <>
            {/* Student Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DashboardCard
                title="Overall Percentage"
                value={`${selectedStudent.overallPercentage}%`}
                icon={TrendingUp}
                color="blue"
                subtitle={`Status: ${selectedStudent.status.toUpperCase()}`}
              />
              <DashboardCard
                title="Attendance"
                value={`${selectedStudent.attendance}%`}
                color={selectedStudent.attendance >= 75 ? 'green' : 'yellow'}
              />
              <DashboardCard
                title="Average Score"
                value={Math.round(
                  selectedStudent.subjects.reduce((sum, s) => sum + s.marks, 0) /
                    selectedStudent.subjects.length
                )}
                color="purple"
              />
            </div>

            {/* Subject Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BarChartComponent
                data={chartData}
                title="Subject-wise Performance"
                xKey="subject"
                yKey="marks"
                color="#3b82f6"
              />

              <LineChartComponent
                data={performanceHistory}
                title="Performance Trend"
                xKey="month"
                yKey="percentage"
                color="#10b981"
              />
            </div>

            {/* Detailled Marks */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Details</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                        Subject
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                        Marks
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                        Percentage
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                        Grade
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {selectedStudent.subjects.map((subject, idx) => (
                      <tr key={idx}>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          {subject.subject}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">{subject.marks}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {subject.percentage}%
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getGradeColor(
                              subject.percentage
                            )}`}
                          >
                            {getGrade(subject.percentage)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recommendations */}
            {getWeakSubjects(selectedStudent).length > 0 && (
              <RecommendationBox
                title="Performance Recommendations"
                weakSubjects={getWeakSubjects(selectedStudent)}
                recommendations={[
                  'Schedule focused tutoring sessions for weak subjects',
                  'Increase study hours in identified areas',
                  'Provide additional practice materials',
                  'Schedule parent-teacher meeting to discuss improvement plan',
                ]}
                type="warning"
              />
            )}

            {/* Download Report */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Download Report</h3>
                  <p className="text-gray-600 mt-1">Export this student's detailed report as PDF</p>
                </div>
                <button className="btn-primary bg-blue-600 hover:bg-blue-700 flex items-center space-x-2">
                  <Download size={20} />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          </>
        )}

        {!selectedStudent && (
          <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
            <p className="text-gray-500">Select a student to view detailed reports</p>
          </div>
        )}
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
