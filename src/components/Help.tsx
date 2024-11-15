import React from 'react';
import { HelpCircle, Book, MessageCircle, Video } from 'lucide-react';

const Help = () => {
  const faqs = [
    {
      question: 'How do I generate a report?',
      answer: 'Navigate to the Reports page, select your criteria (class, subject, etc.), choose your preferred format, and click "Generate Report".'
    },
    {
      question: 'Can I customize report formats?',
      answer: 'Yes! Go to Settings > Report Preferences to customize your default report format and included information.'
    },
    {
      question: 'How do I export student data?',
      answer: 'In the Data View page, use the filters to select the desired data, then click the "Export" button at the top right.'
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Help & Support</h1>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <Book className="h-6 w-6 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">User Guide</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Comprehensive documentation on using all features of the Teacher Portal.
          </p>
          <button className="text-sm text-indigo-600 hover:text-indigo-700">
            Read Documentation →
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <Video className="h-6 w-6 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">Video Tutorials</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Step-by-step video guides for common tasks and features.
          </p>
          <button className="text-sm text-indigo-600 hover:text-indigo-700">
            Watch Tutorials →
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <MessageCircle className="h-6 w-6 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">Contact Support</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Need help? Our support team is here to assist you.
          </p>
          <button className="text-sm text-indigo-600 hover:text-indigo-700">
            Get Support →
          </button>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center space-x-2 mb-6">
          <HelpCircle className="h-5 w-5 text-indigo-600" />
          <h2 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-sm text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Still Need Help?</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="What do you need help with?"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows={4}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Please describe your issue in detail..."
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Help;