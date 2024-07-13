import React from 'react';

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Cerca pizza..."
      value={searchTerm}
      onChange={handleSearch}
      className="w-full p-2 mb-4 border border-gray-300 rounded"
    />
  );
};

export default SearchBar;
