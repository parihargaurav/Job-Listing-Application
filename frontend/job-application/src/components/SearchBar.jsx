import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="Search by location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-grow px-3 py-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        style={{ cursor: 'pointer' }}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
