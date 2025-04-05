import React, { useState } from 'react';

function JobDetails({ job }) {
  const [copied, setCopied] = useState(false);

  if (!job)
    return (
      <div className="text-center text-gray-500">
        Select a job to view details
      </div>
    );

  const daysAgo = Math.floor(
    (Date.now() - new Date(job.postedDateTime)) / (1000 * 60 * 60 * 24)
  );

  const handleShare = () => {
    navigator.clipboard.writeText(job.job_link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 h-full">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
        <p className="text-gray-600">{job.location}</p>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-2">Job Description</h3>
        <ul className="text-gray-700 leading-relaxed list-disc ml-5 space-y-1 text-sm">
          <li><strong>Company:</strong> {job.company}</li>
          <li><strong>Employment Type:</strong> {job.employment_type}</li>
          <li><strong>Experience Range:</strong> {job.experience}</li>
          <li><strong>Source:</strong> {job.source}</li>
          <li><strong>Posted:</strong> {daysAgo} days ago</li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        <a
          href={job.job_link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition"
        >
          View Job on Platform ↗
        </a>

        <button
          onClick={handleShare}
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md font-semibold transition border border-gray-300"
        >
          {copied ? 'Link Copied ✅' : '🔗 Share Job'}
        </button>
      </div>
    </div>
  );
}

export default JobDetails;
