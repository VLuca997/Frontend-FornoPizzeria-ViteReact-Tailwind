import React from 'react';
import { Link } from 'react-router-dom';

const FornoCard = ({ piatto }) => {
  return (
    <Link to={`/forno/${piatto.id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <img className="w-full h-48 object-cover" src={piatto.images} alt={piatto.nome_prodotto} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-purple-700">{piatto.nome_prodotto}</div>
          <p className="text-gray-700 text-base mb-2">{piatto.descrizione}</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Ingredienti:</strong> {piatto.ingredienti.join(', ')}</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Allergeni:</strong> {piatto.allergeni.join(', ')}</p>
          <p className="text-gray-700 text-lg"><strong>Prezzo:</strong> €{piatto.prezzo_al_pezzo.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default FornoCard;
