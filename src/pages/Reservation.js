import React from 'react';

const Reservation = () => {
    return (
        <section id="reservation" data-aos="fade-up">
            <div className="reservation-content">
                <div className="reservation-text">
                    <h2>Réservez votre Séjour</h2>
                    <p>
                        Découvrez nos séjours de bien-être, conçus pour vous apporter détente et sérénité.
                        Profitez d'une expérience unique dans un cadre paisible et ressourçant.
                    </p>
                    <p>
                        Choisissez parmi nos différentes offres de séjours et réservez dès aujourd'hui pour profiter de moments de relaxation inoubliables.
                    </p>
                    <a href="#contact" className="btn-reservation">Réserver un Séjour</a>
                </div>
                <div className="reservation-image">
                    <img src={`${process.env.PUBLIC_URL}/images/sejour.jpg`} alt="Séjour Bien-être" />
                </div>
            </div>
        </section>
    );
};

export default Reservation;
