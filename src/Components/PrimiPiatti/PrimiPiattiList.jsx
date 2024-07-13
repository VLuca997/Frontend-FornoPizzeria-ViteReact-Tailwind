import PriceRangeFilter from '../PriceRangeFilter';
import AllergyExclusionFilter from '../AllergyExclusionFilter';
import Data from '../../Data/Data.json';
import React, { useState, useEffect } from 'react';
import PrimiPiattiCard from './PrimiPiattiCard';
import PrimiPiattiSearch from '../SearchBar';
import FilterCheckboxList from '../FilterCheckboxList';

const PrimiPiattiList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20);
  const [excludedAllergies, setExcludedAllergies] = useState([]);
  const [primiPiatti, setPrimiPiatti] = useState([]);

  useEffect(() => {
    setPrimiPiatti(Data.PrimiPiatti);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    setSelectedFilters((prev) =>
      checked ? [...prev, value] : prev.filter((filter) => filter !== value)
    );
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleAllergyChange = (event) => {
    const { value, checked } = event.target;
    setExcludedAllergies((prev) =>
      checked ? [...prev, value] : prev.filter((allergy) => allergy !== value)
    );
  };

  const filteredPrimiPiatti = primiPiatti.filter((primoPiatto) => {
    const matchesSearchTerm = primoPiatto.nome_prodotto.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              primoPiatto.prezzo_al_pezzo.toString().includes(searchTerm);
    const matchesFilters = selectedFilters.every((filter) => primoPiatto.ingredienti.includes(filter));
    const withinPriceRange = primoPiatto.prezzo_al_pezzo >= minPrice && primoPiatto.prezzo_al_pezzo <= maxPrice;
    const excludesAllergies = excludedAllergies.every((allergy) => !primoPiatto.allergeni.includes(allergy));
    return matchesSearchTerm && matchesFilters && withinPriceRange && excludesAllergies;
  });

  const filterOptions = ["Pomodoro", "Mozzarella", "Basilico", "Aglio", "Origano", "Olio d'oliva"];
  const allergyOptions = ["Latte", "Glutine", "Frutta a guscio"];

  return (
    <div className="container mx-auto p-4">
      <PrimiPiattiSearch searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="flex flex-wrap mb-4">
        <FilterCheckboxList filterOptions={filterOptions} handleFilterChange={handleFilterChange} selectedFilters={selectedFilters} />
        <PriceRangeFilter minPrice={minPrice} maxPrice={maxPrice} handleMinPriceChange={handleMinPriceChange} handleMaxPriceChange={handleMaxPriceChange} />
        <AllergyExclusionFilter allergies={allergyOptions} handleAllergyChange={handleAllergyChange} selectedAllergies={excludedAllergies} />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredPrimiPiatti.map((primoPiatto) => (
          <PrimiPiattiCard key={primoPiatto.nome_prodotto} primoPiatto={primoPiatto} />
        ))}
      </div>
    </div>
  );
};

export default PrimiPiattiList;
