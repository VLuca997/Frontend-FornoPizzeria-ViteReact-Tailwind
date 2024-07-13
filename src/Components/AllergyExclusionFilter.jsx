import React from 'react';

const AllergyExclusionFilter = ({ allergies, handleAllergyChange, selectedAllergies }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-2 text-purple-700">Escludi Allergeni</h2>
      <div className="flex flex-col gap-2">
        {allergies.map((allergy) => (
          <label key={allergy} className="flex items-center gap-2">
            <input 
              type="checkbox" 
              value={allergy} 
              onChange={handleAllergyChange} 
              checked={selectedAllergies.includes(allergy)}
              className="form-checkbox h-4 w-4 text-purple-600"
            />
            <span>{allergy}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AllergyExclusionFilter;
