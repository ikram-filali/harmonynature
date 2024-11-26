import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';

import Presentation from './pages/Presentation';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Accueil from "./components/Accueil";
import Navbar from "./components/Navbar";
import Reservation from "./pages/Reservation";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialisation avec une durée d'animation
    }, []);
  return (
      <div>
          <Navbar />
          <Accueil />
          <Presentation />
          <Services />
          <Reservation />
          <Contact />
          <Footer />
      </div>
  );
}

export default App;
