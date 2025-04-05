function JobCard({ job, onSelect, isSelected }) {
  const daysAgo = Math.floor((Date.now() - new Date(job.postedDateTime)) / (1000 * 60 * 60 * 24));

  return (
    <div
      onClick={onSelect}
      className={`p-5 rounded-2xl shadow-lg border-2 transition-all duration-300 cursor-pointer mb-4 
        ${isSelected ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-300 hover:border-blue-400 hover:shadow-md'}`}
    >
      <h3 className="font-bold text-lg text-blue-900 mb-1">{job.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{job.company_name} – {job.location}</p>

      <div className="flex justify-between text-sm text-gray-700 mb-2">
        <span className="font-medium text-green-700">Source: {job.source}</span>
        <span className="text-xs text-gray-500">{daysAgo} days ago</span>
      </div>

      <div className="mb-2">
        <span className="inline-block bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-medium">
          {job.employment_type}
        </span>
      </div>

      <button className="mt-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2 rounded-full">
        ⚡ Quick Apply
      </button>
    </div>
  );
}

export default JobCard;
