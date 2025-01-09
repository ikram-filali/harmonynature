import React from 'react';

const Services = () => {
    return (
        <section id="services" data-aos="fade-in">
            {/* Regroupement Yoga et Méditation */}
            <div className="service" data-aos="fade-right">
                <div className="service-text">
                    <h3>Yoga et Méditation</h3>
                    <p>
                        Profitez de séances de yoga et de méditation pour renforcer votre corps, apaiser votre esprit et améliorer votre bien-être général.
                    </p>
                </div>
                <div className="service-image">
                    <img src={`${process.env.PUBLIC_URL}/images/yoga.jpg`} alt="Yoga et Méditation" />
                </div>
            </div>

            {/* Regroupement des Soins (Visage, Massage, etc.) */}
            <div className="service" data-aos="fade-left">
                <div className="service-image">
                    <img src={`${process.env.PUBLIC_URL}/images/soins.jpg`} alt="Soins" />
                </div>
                <div className="service-text">
                    <h3>Soins Bien-Être</h3>
                    <p>
                        Offrez-vous des moments de détente avec nos soins de visage, massage relaxant, hydrothérapie et aromathérapie, pour prendre soin de vous en profondeur.
                    </p>
                </div>
            </div>

            {/* Ateliers Collaboratifs */}
            <div className="service" data-aos="fade-right">
                <div className="service-text">
                    <h3>Ateliers Collaboratifs</h3>
                    <p>
                        Participez à des ateliers enrichissants où nous co-créons et apprenons ensemble. Un excellent moyen de stimuler la créativité et de renforcer les liens.
                    </p>
                </div>
                <div className="service-image">
                    <img src={`${process.env.PUBLIC_URL}/images/workshop.jpg`} alt="Ateliers Collaboratifs" />
                </div>
            </div>

            {/* Repas Partagés */}
            <div className="service" data-aos="fade-left">
                <div className="service-image">
                    <img src={`${process.env.PUBLIC_URL}/images/shared-meal.jpg`} alt="Repas Partagés" />
                </div>
                <div className="service-text">
                    <h3>Repas Partagés</h3>
                    <p>
                        Rejoignez-nous pour des repas collaboratifs, dans une ambiance conviviale et communautaire, autour de plats faits maison.
                    </p>
                </div>
            </div>

            {/* Proximité de la station thermale et sorties organisées */}
            <div className="service" data-aos="fade-right">
                <div className="service-text">
                    <h3>Sorties aux Eaux Thermales</h3>
                    <p>
                        Nous sommes situés à proximité d'une station thermale. Profitez de sorties organisées pour vous détendre dans les eaux bienfaisantes et bénéficier de soins thermaux.
                    </p>
                </div>
                <div className="service-image">
                    <img src={`${process.env.PUBLIC_URL}/images/eauthermale.jpg`} alt="Eaux Thermales" />
                </div>
            </div>


        </section>
    );
};

export default Services;
