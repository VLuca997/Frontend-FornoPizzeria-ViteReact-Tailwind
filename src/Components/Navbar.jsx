import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../Layout/SearchBar';
import Data from '../Data/Data.json';  // Assicurati che il percorso sia corretto

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [index, setIndex] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Combina tutti gli oggetti di prodotto in un array
    const allItems = [...Data.Pizza, ...Data.PrimiPiatti, ...Data.Dolci, ...Data.Fritti, ...Data.Forno];
    setIndex(allItems);
  }, []);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    if (searchValue.length > 0) {
      const newSuggestions = index
        .filter(item => item.nome_prodotto.toLowerCase().includes(searchValue.toLowerCase()))
        .map(item => ({
          id: item.id,
          nome_prodotto: item.nome_prodotto,
        }));
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.nome_prodotto);
    setSuggestions([]);
    navigate(`/single/${suggestion.id}`);
  };

  return (
    <nav className="bg-red-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Cuore In Tavola</Link>
        <div className="flex-grow">
          <SearchBar 
            searchTerm={searchTerm} 
            handleSearch={handleSearch} 
            suggestions={suggestions} 
            handleSuggestionClick={handleSuggestionClick}
          />
        </div>
        <ul className="flex gap-4">
          <li><Link to="/piatti" className="text-white hover:underline">Piatti</Link></li>
          <li><Link to="/pizza" className="text-white hover:underline">Pizza</Link></li>
          <li><Link to="/fritti" className="text-white hover:underline">Fritti</Link></li>
          <li><Link to="/dolci" className="text-white hover:underline">Dolci</Link></li>
          <li><Link to="/forno" className="text-white hover:underline">Forno</Link></li>
          <li><Link to="/allProduct" className="text-white hover:underline">Tutti i prodotti</Link></li>
          <li><Link to="/" className="text-white hover:underline">WelcomePage</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
