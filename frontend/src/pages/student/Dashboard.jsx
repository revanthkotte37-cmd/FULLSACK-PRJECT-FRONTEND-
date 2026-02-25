import React from 'react';
import { Layout, DashboardCard, BarChartComponent, RecommendationBox } from '../../components';
import { TrendingUp, Award, Clock } from 'lucide-react';
import { studentsData } from '../../data/dummyData';

export const StudentDashboard = () => {
  // Using first student as current student (in real app, this would be the logged-in user)
  const currentStudent = studentsData[0];

  const subjectData = currentStudent.subjects.map((s) => ({
    subject: s.subject.substring(0, 3),
    marks: s.marks,
  }));

  const weakSubjects = currentStudent.subjects
    .filter((s) => s.marks < 65)
    .map((s) => s.subject);

  const strongSubjects = currentStudent.subjects
    .filter((s) => s.marks >= 80)
    .map((s) => s.subject);

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">My Dashboard</h1>
          <p className="text-gray-600 mt-2">Track your academic performance</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Overall Performance"
            value={`${currentStudent.overallPercentage}%`}
            icon={TrendingUp}
            color="blue"
            subtitle={`Status: ${currentStudent.status.toUpperCase()}`}
          />
          <DashboardCard
            title="Attendance"
            value={`${currentStudent.attendance}%`}
            icon={Clock}
            color={currentStudent.attendance >= 75 ? 'green' : 'yellow'}
            subtitle={currentStudent.attendance >= 75 ? 'Good Attendance' : 'Needs Improvement'}
          />
          <DashboardCard
            title="Class"
            value={currentStudent.class}
            icon={Award}
            color="purple"
            subtitle={`Class: ${currentStudent.class}`}
          />
        </div>

        {/* Performance Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BarChartComponent
            data={subjectData}
            title="Subject-wise Marks"
            xKey="subject"
            yKey="marks"
            color="#3b82f6"
          />

          {/* Subject Performance Table */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">All Subjects</h3>
            <div className="space-y-3">
              {currentStudent.subjects.map((subject, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{subject.subject}</p>
                    <p className="text-xs text-gray-500">{subject.marks}/100</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${getMarkColor(
                          subject.marks
                        )}`}
                        style={{ width: `${subject.marks}%` }}
                      ></div>
                    </div>
                    <span
                      className={`text-sm font-semibold w-10 text-right ${getTextColor(
                        subject.marks
                      )}`}
                    >
                      {subject.marks}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weak Subjects */}
        {weakSubjects.length > 0 && (
          <RecommendationBox
            title="Areas to Improve"
            weakSubjects={weakSubjects}
            recommendations={[
              `Focus on improving your ${weakSubjects[0]} skills`,
              'Attend all tutoring sessions for weak subjects',
              'Complete all assignments on time',
              'Ask for help from your teachers',
            ]}
            type="warning"
          />
        )}

        {/* Strong Subjects */}
        {strongSubjects.length > 0 && (
          <RecommendationBox
            title="Your Strengths"
            recommendations={[
              `Great performance in ${strongSubjects.join(', ')}!`,
              'Keep up the excellent work',
              'Help other students in these subjects',
              'Consider advanced topics in these areas',
            ]}
          />
        )}

        {/* Improvement Tips */}
        <RecommendationBox
          title="Helpful Tips for Improvement"
          recommendations={[
            'Create a study schedule and stick to it',
            'Review your weak areas regularly',
            'Join study groups with classmates',
            'Ask your teacher for extra resources',
            'Practice previous years exam papers',
          ]}
        />
      </div>
    </Layout>
  );
};

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
