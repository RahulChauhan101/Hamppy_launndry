
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Prijzen from './pages/Prijzen';
import FAQ from './pages/FAQ';
import AboutUs from './pages/AboutUs';
import Conatct from './pages/Conatct';
import Locatons from './pages/Locatons';
import How_Doese_it_Works from './pages/How_Doese_it_Works';
import B2b from './pages/B2b';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Navbar" element={<Navbar />} />

      <Route path="/how_Doese_it_Works" element={<How_Doese_it_Works />} />
      <Route path="/prijzen" element={<Prijzen />} />
      <Route path="/B2b" element={<B2b/>} />

      <Route path="/faq" element={<FAQ />} />
      
      <Route path="/locatons" element={<Locatons/>} />
      
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/contact" element={<Conatct/>} />

    </Routes>
  );
};

export default App;
