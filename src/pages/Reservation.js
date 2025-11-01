import React from 'react';

const Reservation = () => {
    return (
        <section id="reservation" data-aos="fade-up">
            <div className="reservation-content">
                <div className="reservation-text">
                    <h2>Commandez votre Tenue</h2>
                    <p>
                        Découvrez nos créations uniques, conçues pour allier élégance, confort et authenticité marocaine.
                        Chaque modèle est réalisé avec soin à partir de matières nobles et de finitions artisanales.
                    </p>
                    <p>
                        Choisissez parmi nos collections prêtes-à-porter ou optez pour une confection sur mesure, et offrez-vous une pièce qui vous ressemble.
                    </p>
                    <a href="#contact" className="btn-reservation">🔘 Commander maintenant</a>
                </div>
                <div className="reservation-image">
                    <img src={`${process.env.PUBLIC_URL}/images/commandez.jpg`} alt="Séjour Bien-être" />
                </div>
            </div>
        </section>
    );
};

export default Reservation;
