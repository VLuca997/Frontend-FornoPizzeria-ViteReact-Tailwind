import React from 'react';
import MenuCard from './MenuCard';
import Data from '../../Data/Data.json';

const MenuList = () => {
  // Numero di elementi da mostrare per ciascuna categoria
  const numItemsToShow = 5;

  // Estrarre elementi da ciascuna categoria
  const Piatti = Data.Piatti.slice(0, numItemsToShow);
  const pizze = Data.Pizza.slice(0, numItemsToShow);
  const dolci = Data.Dolci.slice(0, numItemsToShow);
  const fritti = Data.Fritti.slice(0, numItemsToShow);
  const forno = Data.Forno.slice(0, numItemsToShow);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-center my-8 text-purple-700">Benvenuto nella nostra Trattoria!</h2>
      <div className="category">
        <h3 className="text-2xl font-bold text-left my-4 text-purple-700">Primi Piatti</h3>
        <div className="flex flex-wrap justify-center">
          {Piatti.map((item) => (
            <MenuCard key={item.nome_prodotto} item={item} />
          ))}
        </div>
      </div>
      <div className="category">
        <h3 className="text-2xl font-bold text-left my-4 text-purple-700">Pizze</h3>
        <div className="flex flex-wrap justify-center">
          {pizze.map((item) => (
            <MenuCard key={item.nome_prodotto} item={item} />
          ))}
        </div>
      </div>
      <div className="category">
        <h3 className="text-2xl font-bold text-left my-4 text-purple-700">Dolci</h3>
        <div className="flex flex-wrap justify-center">
          {dolci.map((item) => (
            <MenuCard key={item.nome_prodotto} item={item} />
          ))}
        </div>
      </div>
      <div className="category">
        <h3 className="text-2xl font-bold text-left my-4 text-purple-700">Fritti</h3>
        <div className="flex flex-wrap justify-center">
          {fritti.map((item) => (
            <MenuCard key={item.nome_prodotto} item={item} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center">
          {forno.map((item) => (
            <MenuCard key={item.nome_prodotto} item={item} />
          ))}
        </div>
      </div>
      <div className="category">
        <h3 className="text-2xl font-bold text-left my-4 text-purple-700">Forno</h3>
        
        <div className="flex flex-wrap justify-center">
          {forno.map((item) => (
            <MenuCard key={item.nome_prodotto} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuList;
