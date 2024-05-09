
import React, { useState } from 'react';

const ReportIssue = () => {
  const [issue, setIssue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Issue submitted:', issue);

  };

  return (
    <div className="h-screen container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6 text-center">Report Issue</h1>
      <div className="bg-white p-8 rounded-lg shadow-md mx-auto" style={{ maxWidth: '500px' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="issue" className="block text-gray-700 text-sm font-bold mb-2">
              Describe the Issue
            </label>
            <textarea
              id="issue"
              name="issue"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              className="border rounded w-full py-2 px-3"
              placeholder="Please describe the issue you are experiencing..."
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Submit Issue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportIssue;
