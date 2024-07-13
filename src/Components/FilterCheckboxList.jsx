import React from 'react';

const FilterCheckboxList = ({ filterOptions, handleFilterChange, selectedFilters }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-2 text-purple-700">Filtri Ingredienti</h2>
      <div className="flex flex-col gap-2">
        {filterOptions.map((option) => (
          <label key={option} className="flex items-center gap-2">
            <input 
              type="checkbox" 
              value={option} 
              onChange={handleFilterChange} 
              checked={selectedFilters.includes(option)}
              className="form-checkbox h-4 w-4 text-purple-600"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterCheckboxList;
