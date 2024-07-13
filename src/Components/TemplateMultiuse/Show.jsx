import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../Data/Data.json';

const Show = () => {
  const { id } = useParams();
  const allItems = [...Data.Pizza, ...Data.PrimiPiatti, ...Data.Dolci, ...Data.Fritti];
  const singleElement = allItems.find(single => single.id === parseInt(id));

  if (!singleElement) {
    return <div className="p-4 text-center text-red-600">Prodotto non trovato!</div>;
  }

  return (
    <div className="flex justify-center mx-auto p-4 bg-yellow-50 min-h-screen">
      <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white m-4">
        <img className="w-full h-56 object-cover" src={`https://picsum.photos/200/300?random=${singleElement.id}`} alt={singleElement.nome_prodotto} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-purple-700">{singleElement.nome_prodotto}</div>
          <p className="text-gray-700 text-base mb-2">{singleElement.descrizione}</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Ingredienti:</strong> {singleElement.ingredienti.join(', ')}</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Allergeni:</strong> {singleElement.allergeni.join(', ')}</p>
          <p className="text-gray-700 text-lg"><strong>Prezzo:</strong> €{singleElement.prezzo_al_pezzo.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Show;
