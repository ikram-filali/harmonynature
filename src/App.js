import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

import Presentation from './pages/Presentation';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Accueil from "./components/Accueil";
import Navbar from "./components/Navbar";
import Reservation from "./pages/Reservation";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prestations from "./pages/Prestations";
import AboutUs from "./pages/AboutUs";

function App() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/harmonynature" element={
                    <>
                        <Accueil />
                        <Presentation />
                        <Services />
                        <Reservation />
                        <Contact />
                    </>
                } />
                <Route path="/prestations" element={<Prestations />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
