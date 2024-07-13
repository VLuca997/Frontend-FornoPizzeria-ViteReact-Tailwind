import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({ searchTerm, handleSearch, suggestions, handleSuggestionClick }) => {
  return (
    <div className="relative w-full max-w-lg mx-auto mb-6">
      <input
        type="text"
        placeholder="Cerca prodotti..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      {suggestions.length > 0 && (
        <ul className="absolute left-0 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
          {suggestions.map((suggestion, index) => (
            <li 
              key={index} 
              className="p-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <Link to={`/search/${suggestion}`}>{suggestion}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
