import React from 'react';
import { Link } from 'react-router-dom';

const DolciCard = ({ dolci }) => {
  return (
    <Link to={`/dolci/${dolci.id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <img className="w-full h-48 object-cover" src='https://picsum.photos/200/300' alt={dolci.nome_prodotto} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-purple-700">{dolci.nome_prodotto}</div>
          <p className="text-gray-700 text-lg"><strong>Prezzo:</strong> €{dolci.prezzo_al_pezzo.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default DolciCard;
