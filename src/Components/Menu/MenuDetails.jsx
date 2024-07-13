import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../../Data/Data.json'
const MenuDetails = () => {
    const { id } = useParams();
    const menu = Data.find(item => item.id === parseInt(id));
  
    if (!menu) {
      return <div>Dolce non trovato!</div>;
    }
  
    return (
      <div className="container mx-auto p-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 transform transition duration-500 hover:scale-105 hover:shadow-xl">
          <img className="w-full h-48 object-cover" src='https://picsum.photos/200/300' alt={item.nome_prodotto} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-purple-700">{item.nome_prodotto}</div>
            <p className="text-gray-700 text-base mb-2">{item.descrizione}</p>
            <p className="text-gray-700 text-sm mb-2"><strong>Ingredienti:</strong> {item.ingredienti.join(', ')}</p>
            <p className="text-gray-700 text-sm mb-2"><strong>Allergeni:</strong> {item.allergeni.join(', ')}</p>
            <p className="text-gray-700 text-lg"><strong>Prezzo:</strong> €{item.prezzo_al_pezzo.toFixed(2)}</p>
          </div>
        </div>
      </div>
    );
  };

export default MenuDetails