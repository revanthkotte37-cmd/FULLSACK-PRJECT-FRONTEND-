export const studentsData = [
  {
    id: 1,
    name: 'Rahul Kumar',
    class: '10A',
    email: 'rahul@school.com',
    subjects: [
      { subject: 'Mathematics', marks: 85, percentage: 85 },
      { subject: 'Science', marks: 72, percentage: 72 },
      { subject: 'English', marks: 60, percentage: 60 },
      { subject: 'History', marks: 78, percentage: 78 },
      { subject: 'Geography', marks: 68, percentage: 68 },
    ],
    attendance: 82,
    overallPercentage: 72.6,
    status: 'average',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    class: '10A',
    email: 'priya@school.com',
    subjects: [
      { subject: 'Mathematics', marks: 95, percentage: 95 },
      { subject: 'Science', marks: 88, percentage: 88 },
      { subject: 'English', marks: 92, percentage: 92 },
      { subject: 'History', marks: 85, percentage: 85 },
      { subject: 'Geography', marks: 90, percentage: 90 },
    ],
    attendance: 98,
    overallPercentage: 90,
    status: 'excellent',
  },
  {
    id: 3,
    name: 'Amit Singh',
    class: '10A',
    email: 'amit@school.com',
    subjects: [
      { subject: 'Mathematics', marks: 45, percentage: 45 },
      { subject: 'Science', marks: 52, percentage: 52 },
      { subject: 'English', marks: 48, percentage: 48 },
      { subject: 'History', marks: 55, percentage: 55 },
      { subject: 'Geography', marks: 50, percentage: 50 },
    ],
    attendance: 65,
    overallPercentage: 50,
    status: 'poor',
  },
  {
    id: 4,
    name: 'Sneha Gupta',
    class: '10A',
    email: 'sneha@school.com',
    subjects: [
      { subject: 'Mathematics', marks: 78, percentage: 78 },
      { subject: 'Science', marks: 82, percentage: 82 },
      { subject: 'English', marks: 75, percentage: 75 },
      { subject: 'History', marks: 80, percentage: 80 },
      { subject: 'Geography', marks: 76, percentage: 76 },
    ],
    attendance: 88,
    overallPercentage: 78.2,
    status: 'good',
  },
  {
    id: 5,
    name: 'Vikas Patel',
    class: '10B',
    email: 'vikas@school.com',
    subjects: [
      { subject: 'Mathematics', marks: 68, percentage: 68 },
      { subject: 'Science', marks: 65, percentage: 65 },
      { subject: 'English', marks: 62, percentage: 62 },
      { subject: 'History', marks: 70, percentage: 70 },
      { subject: 'Geography', marks: 64, percentage: 64 },
    ],
    attendance: 75,
    overallPercentage: 65.8,
    status: 'average',
  },
];

export const classAverages = [
  { class: '10A', average: 72 },
  { class: '10B', average: 65 },
  { class: '9A', average: 68 },
  { class: '9B', average: 70 },
];

export const subjectPerformance = [
  { subject: 'Mathematics', average: 74 },
  { subject: 'Science', average: 71 },
  { subject: 'English', average: 67 },
  { subject: 'History', average: 73 },
  { subject: 'Geography', average: 69 },
];

export const performanceHistory = [
  { month: 'Jan', percentage: 65 },
  { month: 'Feb', percentage: 68 },
  { month: 'Mar', percentage: 70 },
  { month: 'Apr', percentage: 72 },
  { month: 'May', percentage: 75 },
  { month: 'Jun', percentage: 78 },
];

export const recentActivities = [
  {
    id: 1,
    type: 'grade_updated',
    student: 'Rahul Kumar',
    subject: 'Mathematics',
    newGrade: 'A',
    timestamp: '2024-02-20',
  },
  {
    id: 2,
    type: 'attendance_marked',
    student: 'Priya Sharma',
    message: 'Perfect attendance this week',
    timestamp: '2024-02-20',
  },
  {
    id: 3,
    type: 'student_added',
    student: 'New Student',
    message: 'John Doe added to class 10A',
    timestamp: '2024-02-19',
  },
  {
    id: 4,
    type: 'report_generated',
    student: 'Amit Singh',
    message: 'Quarterly report generated',
    timestamp: '2024-02-19',
  },
];

export const examHistory = [
  {
    id: 1,
    examName: 'Mid-Term Exam',
    date: '2024-01-15',
    percentage: 72,
    subjects: [
      { subject: 'Math', marks: 85 },
      { subject: 'Science', marks: 72 },
      { subject: 'English', marks: 60 },
    ],
  },
  {
    id: 2,
    examName: 'Unit Test 1',
    date: '2024-02-05',
    percentage: 75,
    subjects: [
      { subject: 'Math', marks: 88 },
      { subject: 'Science', marks: 75 },
      { subject: 'English', marks: 62 },
    ],
  },
  {
    id: 3,
    examName: 'Unit Test 2',
    date: '2024-02-20',
    percentage: 78,
    subjects: [
      { subject: 'Math', marks: 90 },
      { subject: 'Science', marks: 78 },
      { subject: 'English', marks: 65 },
    ],
  },
];
