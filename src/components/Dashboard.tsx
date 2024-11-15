import React from 'react';
import { 
  FileSpreadsheet, 
  Users, 
  Calendar,
  Clock,
  BarChart
} from 'lucide-react';
import type { User } from '../App';

type DashboardProps = {
  user: User | null;
};

const Dashboard = ({ user }: DashboardProps) => {
  const stats = [
    { label: 'Total Students', value: '156', icon: Users },
    { label: 'Reports Generated', value: '24', icon: FileSpreadsheet },
    { label: 'Current Semester', value: 'Fall 2024', icon: Calendar },
    { label: 'Active Classes', value: '8', icon: Clock },
  ];

  const recentReports = [
    { name: 'Mid-term Results', date: '2024-03-15', type: 'Excel' },
    { name: 'Attendance Report', date: '2024-03-14', type: 'Sheets' },
    { name: 'Progress Report', date: '2024-03-13', type: 'Excel' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.name}!
        </h1>
        <span className="text-sm text-gray-500">
          Last login: Today at 9:42 AM
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Reports */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Reports</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-700">
              View all
            </button>
          </div>
          <div className="space-y-4">
            {recentReports.map((report) => (
              <div
                key={report.name}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <FileSpreadsheet className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {report.name}
                    </p>
                    <p className="text-xs text-gray-500">{report.date}</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-500">
                  {report.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Performance Overview
            </h2>
            <BarChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Class Average</span>
                <span className="font-medium text-gray-900">85%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Attendance Rate</span>
                <span className="font-medium text-gray-900">92%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full" style={{ width: '92%' }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Assignment Completion</span>
                <span className="font-medium text-gray-900">78%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '78%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;