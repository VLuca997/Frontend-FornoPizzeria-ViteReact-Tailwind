import React from 'react';

const SearchBar = ({ searchTerm, handleSearch, suggestions, handleSuggestionClick }) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Cerca prodotti..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      {suggestions.length > 0 && (
        <ul className="absolute left-0 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className="p-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.nome_prodotto}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
