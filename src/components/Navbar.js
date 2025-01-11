import React, { useState } from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <nav>
                <div className="navbar-container">
                    <div className="navbar-logo">

                        <Link to="/harmonynature" className="logo-link">
                            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo Maison Bien-Être" className="logo-image" />
                            <span className="logo-text">Harmony Nature</span>
                        </Link>
                    </div>

                    <div className="navbar-links">
                        <Link to="/prestations">Prestations</Link>
                        <Link to="/about-us">À propos</Link>
                        <a href="#reservation">Réserver</a>
                        <a onClick={handleModal}>Se Connecter</a>
                    </div>
                </div>
            </nav>

            {showModal && (
                <div className="modal-overlay" onClick={handleModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h2>Connectez-vous</h2>
                        <form>
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Mot de passe" required />
                            <button type="submit">Se Connecter</button>
                        </form>
                        <button className="close-modal" onClick={handleModal}>Fermer</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
