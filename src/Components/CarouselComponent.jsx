import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

const items = [
  {
    title: "Pizza e Pizzette",
    img: "https://via.placeholder.com/400x300",
    description: "Gusta le nostre pizze alla pala e tonde, realizzate con ingredienti freschi e di qualità."
  },
  {
    title: "Fritti",
    img: "https://via.placeholder.com/400x300",
    description: "Assapora i nostri fritti croccanti e dorati, perfetti per ogni occasione."
  },
  {
    title: "Pasta e Primi Piatti",
    img: "https://via.placeholder.com/400x300",
    description: "Prova la nostra pasta e i primi piatti, preparati con ricette tradizionali e ingredienti freschi."
  },
  {
    title: "Secondi Piatti e Contorni",
    img: "https://via.placeholder.com/400x300",
    description: "Scopri i nostri secondi piatti e contorni, ideali per un pasto completo e soddisfacente."
  },
  {
    title: "Dolci e Cornetteria",
    img: "https://via.placeholder.com/400x300",
    description: "Delizia il tuo palato con i nostri dolci artigianali e cornetti appena sfornati."
  },
  {
    title: "Bevande e Birreria",
    img: "https://via.placeholder.com/400x300",
    description: "Rinfrescati con le nostre bevande e scopri la nostra selezione di birre artigianali."
  }
];

function CarouselComponent() {
  return (
    <Carousel
      autoPlay
      animation="slide"
      indicators
      navButtonsAlwaysVisible
      className="my-10 w-[500px]"
    >
      {items.map((item, index) => (
        <Paper
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden "
        >
          <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-purple-700">{item.title}</h2>
            <p className="mt-4 text-gray-600">{item.description}</p>
          </div>
        </Paper>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
