import React, { useState, useEffect } from 'react';
import Data from '../../Data/Data.json';
import FornoCard from './FornoCard';
import SearchBar from '../SearchBar';
import FilterCheckboxList from '../FilterCheckboxList';
import PriceRangeFilter from '../PriceRangeFilter';
import AllergyExclusionFilter from '../AllergyExclusionFilter';

const FornoList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20);
  const [excludedAllergies, setExcludedAllergies] = useState([]);
  const [piatti, setPiatti] = useState([]);

  useEffect(() => {
    setPiatti(Data.Forno); // Carica i dati dei primi piatti
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

  const filteredForno = piatti.filter((piatto) => {
    const matchesSearchTerm = piatto.nome_prodotto.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              piatto.prezzo_al_pezzo.toString().includes(searchTerm);
    const matchesFilters = selectedFilters.every((filter) => piatto.ingredienti.includes(filter));
    const withinPriceRange = piatto.prezzo_al_pezzo >= minPrice && piatto.prezzo_al_pezzo <= maxPrice;
    const excludesAllergies = excludedAllergies.every((allergy) => !piatto.allergeni.includes(allergy));
    return matchesSearchTerm && matchesFilters && withinPriceRange && excludesAllergies;
  });

  const filterOptions = ["Pomodoro", "Mozzarella", "Basilico", "Aglio", "Origano", "Olio d'oliva"];
  const allergyOptions = ["Latte", "Glutine", "Frutta a guscio"];

  return (
    <div className="container mx-auto p-4">
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="flex flex-wrap mb-4">
        <FilterCheckboxList filterOptions={filterOptions} handleFilterChange={handleFilterChange} selectedFilters={selectedFilters} />
        <PriceRangeFilter minPrice={minPrice} maxPrice={maxPrice} handleMinPriceChange={handleMinPriceChange} handleMaxPriceChange={handleMaxPriceChange} />
        <AllergyExclusionFilter allergies={allergyOptions} handleAllergyChange={handleAllergyChange} selectedAllergies={excludedAllergies} />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredForno.map((piatto) => (
          <FornoCard key={piatto.nome_prodotto} piatto={piatto} />
        ))}
      </div>
    </div>
  );
};

export default FornoList;
