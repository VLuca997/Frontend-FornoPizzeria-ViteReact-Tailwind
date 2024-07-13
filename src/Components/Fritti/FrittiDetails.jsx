import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../../Data/Data.json'
const FrittiDetails
 = () => {
    const { id } = useParams();
    const fritti = Data.Fritti.find(fritto => fritto.id === parseInt(id));
  
    if (!fritti) {
      return <div>Fritto non trovato!</div>;
    }
  
    return (
      <div className="container mx-auto p-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 transform transition duration-500 hover:scale-105 hover:shadow-xl">
          <img className="w-full h-48 object-cover" src='https://picsum.photos/200/300' alt={fritti.nome_prodotto} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-purple-700">{fritti.nome_prodotto}</div>
            <p className="text-gray-700 text-base mb-2">{fritti.descrizione}</p>
            <p className="text-gray-700 text-sm mb-2"><strong>Ingredienti:</strong> {fritti.ingredienti.join(', ')}</p>
            <p className="text-gray-700 text-sm mb-2"><strong>Allergeni:</strong> {fritti.allergeni.join(', ')}</p>
            <p className="text-gray-700 text-lg"><strong>Prezzo:</strong> €{fritti.prezzo_al_pezzo.toFixed(2)}</p>
          </div>
        </div>
      </div>
    );
  };

export default FrittiDetails
