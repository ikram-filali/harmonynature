import React, { useState } from 'react';

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
                        <img src="/images/logo.png" alt="Logo Maison Bien-Être" className="logo-image" />
                        <span className="logo-text">Harmony Nature</span>
                    </div>

                    <div className="navbar-links">
                        <a href="#services">Services</a>
                        <a href="#reservation">Réserver</a>
                        <a href="#contact">Contact</a>
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
