import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Layout/Footer';
import Navbar from './Components/Navbar';
import Piatti from './Pages/Piatti/Piatti';
import Pizza from './Pages/Pizza/Pizza';
import Fritti from './Pages/Fritti/Fritti';
import Dolci from './Pages/Dolci/Dolci';
import Welcome from './Pages/Welcome';
import Show from './Components/TemplateMultiuse/Show';
import DolciDetails from './Components/Dolci/DolciDetails';
import Index from './Components/TemplateMultiuse/Index';
import FrittiDetails from './Components/Fritti/FrittiDetails';
import PizzaDetails from './Components/Pizza/PizzaDetails';
import PiattiDetails from './Components/Piatti/PiattiDetails';
import Forno from './Pages/Forno/Forno';
import FornoDetails from './Components/Forno/FornoDetails';




function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <BrowserRouter>
        <Navbar />
        <div className='flex-grow'>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/allProduct' element={<Index />} />
            <Route path='/single/:id' element={<Show />} />

            <Route path='/piatti' element={<Piatti />} />
            <Route path='/piatti/:id' element={<PiattiDetails />} />

            <Route path='/pizza' element={<Pizza />} />
            <Route path='/pizza/:id' element={<PizzaDetails />} />

            <Route path='/fritti' element={<Fritti />} />
            <Route path='/fritti/:id' element={<FrittiDetails />} />

            <Route path='/dolci' element={<Dolci />} />
            <Route path='/dolci/:id' element={<DolciDetails />} />

            <Route path='/forno' element={<Forno />} />
            <Route path='/forno/:id' element={<FornoDetails />} />

            
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
