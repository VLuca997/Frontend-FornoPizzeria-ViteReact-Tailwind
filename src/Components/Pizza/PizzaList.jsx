import PriceRangeFilter from '../PriceRangeFilter';
import AllergyExclusionFilter from '../AllergyExclusionFilter';
import Data from '../../Data/Data.json';
import React, { useState, useEffect } from 'react';
import PizzaCard from './PizzaCard';
import PizzaSearch from '../SearchBar';
import FilterCheckboxList from '../FilterCheckboxList';

const PizzaList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20);
  const [excludedAllergies, setExcludedAllergies] = useState([]);
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    setPizzas(Data.Pizza);
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

  const filteredPizzas = pizzas.filter((pizza) => {
    const matchesSearchTerm = pizza.nome_prodotto.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              pizza.prezzo_al_pezzo.toString().includes(searchTerm);
    const matchesFilters = selectedFilters.every((filter) => pizza.ingredienti.includes(filter));
    const withinPriceRange = pizza.prezzo_al_pezzo >= minPrice && pizza.prezzo_al_pezzo <= maxPrice;
    const excludesAllergies = excludedAllergies.every((allergy) => !pizza.allergeni.includes(allergy));
    return matchesSearchTerm && matchesFilters && withinPriceRange && excludesAllergies;
  });

  const filterOptions = ["Pomodoro", "Mozzarella", "Basilico", "Aglio", "Origano", "Olio d'oliva"];
  const allergyOptions = ["Latte", "Glutine", "Frutta a guscio"];

  return (
    <div className="container mx-auto p-4">
      <PizzaSearch searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="flex flex-wrap mb-4">
        <FilterCheckboxList filterOptions={filterOptions} handleFilterChange={handleFilterChange} selectedFilters={selectedFilters} />
        <PriceRangeFilter minPrice={minPrice} maxPrice={maxPrice} handleMinPriceChange={handleMinPriceChange} handleMaxPriceChange={handleMaxPriceChange} />
        <AllergyExclusionFilter allergies={allergyOptions} handleAllergyChange={handleAllergyChange} selectedAllergies={excludedAllergies} />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredPizzas.map((pizza) => (
          <PizzaCard key={pizza.nome_prodotto} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
