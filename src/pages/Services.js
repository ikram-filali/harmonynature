import React from 'react';

const Services = () => {
    return (
        <section id="services" data-aos="fade-in">
            <div className="service" data-aos="fade-right">
                <div className="service-text">
                    <h3>Massage Relaxant</h3>
                    <p>
                        Profitez d’un moment de pure détente avec nos massages relaxants.
                        Une expérience apaisante qui libère vos tensions.
                    </p>
                </div>
                <div className="service-image">
                    <img src={`${process.env.PUBLIC_URL}/images/massage.jpg`} alt="Massage Relaxant" />
                </div>
            </div>

            <div className="service" data-aos="fade-left">
                <div className="service-image">
                    <img src={`${process.env.PUBLIC_URL}/images/yoga.jpg`} alt="Séance de Yoga" />
                </div>
                <div className="service-text">
                    <h3>Séance de Yoga</h3>
                    <p>
                        Découvrez nos séances de yoga adaptées à tous les niveaux.
                    </p>
                </div>
            </div>

            <div className="service" data-aos="fade-right">
                <div className="service-text">
                    <h3>Soins Visage</h3>
                    <p>
                        Offrez-vous un soin visage pour nourrir votre peau en profondeur.
                    </p>
                </div>
                <div className="service-image">
                    <img src={`${process.env.PUBLIC_URL}/images/skincare.jpg`} alt="Soins Visage" />
                </div>
            </div>

            <div className="service" data-aos="fade-left">
                <div className="service-image">
                    <img src={`${process.env.PUBLIC_URL}/images/spa.jpg`} alt="Soins Spa" />
                </div>
                <div className="service-text">
                    <h3>Soins Spa</h3>
                    <p>
                        Détente et relaxation dans notre espace bien-être.
                    </p>
                </div>
            </div>

            <div className="service" data-aos="fade-right">
                <div className="service-text">
                    <h3>Réflexologie</h3>
                    <p>
                        Un soin par les pieds pour stimuler la circulation et apaiser.
                    </p>
                </div>
                <div className="service-image">
                    <img src={`${process.env.PUBLIC_URL}/images/reflexologie.jpg`} alt="Réflexologie" />
                </div>
            </div>
        </section>
    );
};

export default Services;