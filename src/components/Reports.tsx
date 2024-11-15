import React, { useState } from 'react';
import { FileSpreadsheet, Download, Filter, Settings2 } from 'lucide-react';

type ReportCriteria = {
  class: string;
  subject: string;
  examType: string;
  semester: string;
  format: 'excel' | 'sheets';
};

const Reports = () => {
  const [criteria, setCriteria] = useState<ReportCriteria>({
    class: '',
    subject: '',
    examType: '',
    semester: '',
    format: 'excel'
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate report generation
    setTimeout(() => setIsGenerating(false), 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Generate Reports</h1>
        <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
          <Settings2 className="h-4 w-4" />
          <span>Report Settings</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Report Criteria */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center space-x-2 mb-6">
            <Filter className="h-5 w-5 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">Report Criteria</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Class
              </label>
              <select
                value={criteria.class}
                onChange={(e) => setCriteria({ ...criteria, class: e.target.value })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select Class</option>
                <option value="class-10a">Class 10-A</option>
                <option value="class-10b">Class 10-B</option>
                <option value="class-11a">Class 11-A</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <select
                value={criteria.subject}
                onChange={(e) => setCriteria({ ...criteria, subject: e.target.value })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select Subject</option>
                <option value="mathematics">Mathematics</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Exam Type
              </label>
              <select
                value={criteria.examType}
                onChange={(e) => setCriteria({ ...criteria, examType: e.target.value })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select Exam Type</option>
                <option value="midterm">Midterm</option>
                <option value="final">Final</option>
                <option value="quiz">Quiz</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Semester
              </label>
              <select
                value={criteria.semester}
                onChange={(e) => setCriteria({ ...criteria, semester: e.target.value })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select Semester</option>
                <option value="fall-2024">Fall 2024</option>
                <option value="spring-2024">Spring 2024</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Format
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="excel"
                    checked={criteria.format === 'excel'}
                    onChange={(e) => setCriteria({ ...criteria, format: 'excel' as 'excel' | 'sheets' })}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">Excel</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="sheets"
                    checked={criteria.format === 'sheets'}
                    onChange={(e) => setCriteria({ ...criteria, format: 'sheets' as 'excel' | 'sheets' })}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">Google Sheets</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Report Preview */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center space-x-2 mb-6">
            <FileSpreadsheet className="h-5 w-5 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">Report Preview</h2>
          </div>

          <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center space-y-4">
            <FileSpreadsheet className="h-12 w-12 text-gray-400 mx-auto" />
            <div>
              <p className="text-sm text-gray-600">
                Your report will include:
              </p>
              <ul className="mt-2 text-sm text-gray-500 space-y-1">
                <li>• Student Information</li>
                <li>• Attendance Records</li>
                <li>• Exam Scores</li>
                <li>• Performance Analytics</li>
              </ul>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className={`mt-6 w-full flex items-center justify-center space-x-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
              ${isGenerating 
                ? 'bg-indigo-400 cursor-not-allowed' 
                : 'bg-indigo-600 hover:bg-indigo-700'}`}
          >
            <Download className="h-4 w-4" />
            <span>{isGenerating ? 'Generating...' : 'Generate Report'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;