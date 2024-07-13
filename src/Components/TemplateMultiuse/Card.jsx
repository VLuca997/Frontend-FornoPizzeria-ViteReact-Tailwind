import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ single }) => {
  return (
    <Link to={`/single/${single.id}`} className="w-full max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img className="w-full h-48 object-cover" src={`https://picsum.photos/200/300?random=${single.id}`} alt={single.nome_prodotto} />
      <div className="p-4">
        <div className="font-bold text-xl mb-2 text-red-600">{single.nome_prodotto}</div>
        <p className="text-gray-700 text-lg"><strong>Prezzo:</strong> €{single.prezzo_al_pezzo.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default Card;
