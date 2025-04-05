import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from '../components/JobCard';
import JobDetails from '../components/JobDetails';
import SearchBar from '../components/SearchBar';

function Home() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  // Removed unused location state

  const fetchJobs = async (loc = '') => {
    const res = await axios.get(`http://localhost:5000/api/jobs?location=${loc}`);
    setJobs(res.data);
    if (res.data.length > 0) {
      setSelectedJob(res.data[0]);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSearch = (loc) => {
    // Removed setLocation as location state is no longer used
    fetchJobs(loc);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-white p-4 overflow-y-auto border-r border-gray-200">
        <SearchBar onSearch={handleSearch} />
        {jobs.map((job) => (
          <JobCard
            key={job._id}
            job={job}
            onSelect={() => setSelectedJob(job)}
            isSelected={selectedJob?._id === job._id}
          />
        ))}
      </div>
      <div className="w-2/3 p-6 bg-gray-50 overflow-y-auto">
        {selectedJob ? (
          <JobDetails job={selectedJob} />
        ) : (
          <p className="text-gray-600">Select a job to see the details.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
