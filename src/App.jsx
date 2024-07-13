import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Layout/Footer';
import Navbar from './Components/Navbar';
import PrimiPiatti from './Pages/PrimiPiatti/PrimiPiatti';
import Pizza from './Pages/Pizza/Pizza';
import Fritti from './Pages/Fritti/Fritti';
import Dolci from './Pages/Dolci/Dolci';
import Welcome from './Pages/Welcome';
import Show from './Components/TemplateMultiuse/Show';
import DolciDetails from './Components/Dolci/DolciDetails';
import Index from './Components/TemplateMultiuse/Index';




function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <BrowserRouter>
        <Navbar />
        <div className='flex-grow'>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/piatti' element={<PrimiPiatti />} />
            <Route path='/pizza' element={<Pizza />} />
            <Route path='/fritti' element={<Fritti />} />
            <Route path='/dolci' element={<Dolci />} />
            <Route path='/dolci/:id' element={<DolciDetails />} />
            <Route path='/allProduct' element={<Index />} />
            <Route path='/single/:id' element={<Show />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
