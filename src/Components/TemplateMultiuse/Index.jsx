import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import FilterCheckboxList from '../FilterCheckboxList';
import PriceRangeFilter from '../PriceRangeFilter';
import AllergyExclusionFilter from '../AllergyExclusionFilter';
import Data from '../../Data/Data.json';
import Card from './Card';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20);
  const [excludedAllergies, setExcludedAllergies] = useState([]);
  const [index, setIndex] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const allItems = [
      ...Data.Pizza,
      ...Data.PrimiPiatti,
      ...Data.Dolci,
      ...Data.Fritti,
      ...Data.Forno
    ];
    setIndex(allItems);
  }, []);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    if (searchValue.length > 0) {
      const newSuggestions = index
        .filter(item => item.nome_prodotto.toLowerCase().includes(searchValue.toLowerCase()))
        .map(item => item.nome_prodotto);
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
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

  const filteredData = index.filter((single) => {
    const matchesSearchTerm = single.nome_prodotto.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              single.prezzo_al_pezzo.toString().includes(searchTerm);
    const matchesFilters = selectedFilters.every((filter) => single.ingredienti.includes(filter));
    const withinPriceRange = single.prezzo_al_pezzo >= minPrice && single.prezzo_al_pezzo <= maxPrice;
    const excludesAllergies = excludedAllergies.every((allergy) => !single.allergeni.includes(allergy));
    return matchesSearchTerm && matchesFilters && withinPriceRange && excludesAllergies;
  });

  const filterOptions = ["Pomodoro", "Mozzarella", "Basilico", "Aglio", "Origano", "Olio d'oliva"];
  const allergyOptions = ["Latte", "Glutine", "Frutta a guscio"];

  return (
    <div className="container mx-auto p-4 bg-yellow-50 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-red-600 mb-2">Benvenuti alla Pizzeria!</h1>
        <p className="text-lg text-gray-700">Scopri i nostri piatti deliziosi e trova il tuo preferito!</p>
      </header>
      <SearchBar 
        searchTerm={searchTerm} 
        handleSearch={handleSearch} 
        suggestions={suggestions} 
        handleSuggestionClick={handleSuggestionClick}
      />
      <div className="flex flex-wrap gap-6 justify-center mb-8">
        <FilterCheckboxList 
          filterOptions={filterOptions} 
          handleFilterChange={handleFilterChange} 
          selectedFilters={selectedFilters} 
        />
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col gap-4">
          <PriceRangeFilter 
            minPrice={minPrice} 
            maxPrice={maxPrice} 
            handleMinPriceChange={handleMinPriceChange} 
            handleMaxPriceChange={handleMaxPriceChange} 
          />
          <AllergyExclusionFilter 
            allergies={allergyOptions} 
            handleAllergyChange={handleAllergyChange} 
            selectedAllergies={excludedAllergies} 
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((single) => (
            <Card key={single.id} single={single} />
          ))
        ) : (
          <p className="text-center text-gray-500">Nessun prodotto trovato!</p>
        )}
      </div>
    </div>
  );
};

export default Index;
