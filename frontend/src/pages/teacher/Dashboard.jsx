import React from 'react';
import { Layout, DashboardCard, BarChartComponent, RecommendationBox } from '../../components';
import { Users, TrendingUp, BookOpen, Activity } from 'lucide-react';
import { studentsData, subjectPerformance, recentActivities } from '../../data/dummyData';

export const TeacherDashboard = () => {
  const totalStudents = studentsData.length;
  const classAverage = (
    studentsData.reduce((sum, s) => sum + s.overallPercentage, 0) / studentsData.length
  ).toFixed(1);

  const chartData = subjectPerformance.map((subject) => ({
    subject: subject.subject,
    average: subject.average,
  }));

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's your performance overview</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <DashboardCard
            title="Total Students"
            value={totalStudents}
            icon={Users}
            color="blue"
            trend="+5 this month"
            trendDirection="up"
          />
          <DashboardCard
            title="Class Average"
            value={`${classAverage}%`}
            icon={TrendingUp}
            color="green"
            trend="+2% from last month"
            trendDirection="up"
          />
          <DashboardCard
            title="Active Classes"
            value="4"
            icon={BookOpen}
            color="yellow"
            subtitle="10A, 10B, 9A, 9B"
          />
          <DashboardCard
            title="Recent Activities"
            value="12"
            icon={Activity}
            color="purple"
            trend="Last 7 days"
            trendDirection="up"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BarChartComponent
            data={chartData}
            title="Subject-wise Performance"
            xKey="subject"
            yKey="average"
            color="#3b82f6"
          />

          {/* Recent Activity */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
            <div className="space-y-4">
              {recentActivities.slice(0, 4).map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl">{getActivityIcon(activity.type)}</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.student}</p>
                    <p className="text-xs text-gray-600">{activity.message || activity.subject}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <RecommendationBox
          title="Teaching Insights"
          recommendations={[
            'Focus on Mathematics improvement - 5 students scoring below 70%',
            'Schedule interventions for weak performing students',
            'Recognize top performers - Priya Sharma with 90% overall',
            'Attendance tracking needed for Amit Singh (65%)',
          ]}
        />
      </div>
    </Layout>
  );
};

function getActivityIcon(type) {
  switch (type) {
    case 'grade_updated':
      return '📝';
    case 'attendance_marked':
      return '✅';
    case 'student_added':
      return '➕';
    case 'report_generated':
      return '📊';
    default:
      return '📌';
  }
}
