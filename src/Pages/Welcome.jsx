import React from 'react';
import MenuList from '../Components/Menu/MenuList';
import CarouselComponent from '../Components/CarouselComponent';



const Welcome = () => {
  return (
    <>
      <div className="bg-red-200 text-gray-800 p-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8 text-purple-700">Benvenuti al Nostro Forno!</h1>
          <p className="text-xl mb-10">
            Situato a Cisterna di Latina, nel cuore di Fontana Biondi, il nostro forno offre una vasta gamma di prodotti artigianali e delizie culinarie per soddisfare ogni palato. Vieni a trovarci e scopri il gusto autentico dei nostri prodotti!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {[
              { title: "Pizza e Pizzette", img: "https://via.placeholder.com/400x300", description: "Gusta le nostre pizze alla pala e tonde, realizzate con ingredienti freschi e di qualità." },
              { title: "Fritti", img: "https://via.placeholder.com/400x300", description: "Assapora i nostri fritti croccanti e dorati, perfetti per ogni occasione." },
              { title: "Pasta e Primi Piatti", img: "https://via.placeholder.com/400x300", description: "Prova la nostra pasta e i primi piatti, preparati con ricette tradizionali e ingredienti freschi." },
              { title: "Secondi Piatti e Contorni", img: "https://via.placeholder.com/400x300", description: "Scopri i nostri secondi piatti e contorni, ideali per un pasto completo e soddisfacente." },
              { title: "Dolci e Cornetteria", img: "https://via.placeholder.com/400x300", description: "Delizia il tuo palato con i nostri dolci artigianali e cornetti appena sfornati." },
              { title: "Bevande e Birreria", img: "https://via.placeholder.com/400x300", description: "Rinfrescati con le nostre bevande e scopri la nostra selezione di birre artigianali." },
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-purple-700">{item.title}</h2>
                  <p className="mt-4 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='w-full flex justify-center'>
            <CarouselComponent/>
          </div>
          <div className="bg-purple-700 text-white p-10 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Servizi Offerti</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold">Accoglienza e Comfort</h3>
                <p className="mt-4 text-lg">Posti a sedere: 40 all'esterno e 5 all'interno</p>
                <p className="mt-4 text-lg">Bagno nel locale</p>
                <p className="mt-4 text-lg">Macchinetta per caffè</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Servizi di Ristorazione</h3>
                <p className="mt-4 text-lg">Servizio di asporto e domicilio</p>
                <p className="mt-4 text-lg">Prodotti artigianali, dal pane a tutto</p>
                <p className="mt-4 text-lg">Vineria</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Menu Disponibili</h3>
                <p className="mt-4 text-lg">3 tipologie di menu: ragazzo, adulto e family</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Specialità della Casa</h3>
                <p className="mt-4 text-lg">Pizze alla pala e tonde</p>
                <p className="mt-4 text-lg">Dolci e cornetti freschi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div><MenuList /></div>
    </>
  );
}

export default Welcome;
