import React from 'react';

const PriceRangeFilter = ({ minPrice, maxPrice, handleMinPriceChange, handleMaxPriceChange }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-2 text-purple-700">Filtro Prezzo</h2>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <span>Prezzo Minimo:</span>
          <input 
            type="number" 
            value={minPrice} 
            onChange={handleMinPriceChange} 
            className="border border-gray-300 p-1 rounded-md"
          />
        </label>
        <label className="flex items-center gap-2">
          <span>Prezzo Massimo:</span>
          <input 
            type="number" 
            value={maxPrice} 
            onChange={handleMaxPriceChange} 
            className="border border-gray-300 p-1 rounded-md"
          />
        </label>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
