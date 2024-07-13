import React from 'react';

const FrittiCard = ({ fritti }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 transform transition duration-500 hover:scale-105 hover:shadow-xl">
      <img className="w-full h-48 object-cover" src={fritti.images} alt={fritti.nome_prodotto} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-purple-700">{fritti.nome_prodotto}</div>
        <p className="text-gray-700 text-base mb-2">{fritti.descrizione}</p>
        <p className="text-gray-700 text-sm mb-2"><strong>Ingredienti:</strong> {fritti.ingredienti.join(', ')}</p>
        <p className="text-gray-700 text-sm mb-2"><strong>Allergeni:</strong> {fritti.allergeni.join(', ')}</p>
        <p className="text-gray-700 text-lg"><strong>Prezzo:</strong> €{fritti.prezzo_al_pezzo.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default FrittiCard;
