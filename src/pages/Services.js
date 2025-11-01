import React from 'react';

const Services = () => {
    return (
        <section id="services" data-aos="fade-in">
            {/* Regroupement Yoga et Méditation */}
            <div className="service" data-aos="fade-right">
                <div className="service-text">
                    <h3>Confection sur mesure</h3>
                    <p>
                        Caftans, djellabas et abayas réalisés selon vos envies — coupe, tissu et finitions personnalisées pour un résultat unique.
                    </p>
                </div>
                <div className="service-image">
                    <img src={`${process.env.PUBLIC_URL}/images/confection_sur_mesure.jpg`} />
                </div>
            </div>

            {/* Regroupement des Soins (Visage, Massage, etc.) */}
            <div className="service" data-aos="fade-left">
                <div className="service-image">
                    <img src={`${process.env.PUBLIC_URL}/images/retouches.jpg`} alt="Soins" />
                </div>
                <div className="service-text">
                    <h3>Retouche et restauration</h3>
                    <p>
                        Redonnez vie à vos pièces préférées grâce à un ajustement soigné et des finitions raffinées.
                    </p>
                </div>
            </div>

            {/* Ateliers Collaboratifs */}
            <div className="service" data-aos="fade-right">
                <div className="service-text">
                    <h3>Collections exclusives</h3>
                    <p>
                        Découvrez des modèles limités et originaux, inspirés du patrimoine marocain et revisités avec une touche contemporaine.
                    </p>
                </div>
                <div className="service-image">
                    <img src={`${process.env.PUBLIC_URL}/images/caftans.jpg`} alt="Ateliers Collaboratifs" />
                </div>
            </div>

            {/* Repas Partagés */}
            <div className="service" data-aos="fade-left">
                <div className="service-image">
                    <img src={`${process.env.PUBLIC_URL}/images/conseil.jpg`} alt="Repas Partagés" />
                </div>
                <div className="service-text">
                    <h3>Conseil & commande en ligne</h3>
                    <p>
                        Un accompagnement personnalisé : prise de mesure à distance, suivi des commandes et recommandations stylistiques.
                    </p>
                </div>
            </div>

            {/* Proximité de la station thermale et sorties organisées */}
            {/*<div className="service" data-aos="fade-right">
                <div className="service-text">
                    <h3>Sorties aux Eaux Thermales</h3>
                    <p>
                        Nous sommes situés à proximité d'une station thermale. Profitez de sorties organisées pour vous détendre dans les eaux bienfaisantes et bénéficier de soins thermaux.
                    </p>
                </div>
                <div className="service-image">
                    <img src={`${process.env.PUBLIC_URL}/images/eauthermale.jpg`} alt="Eaux Thermales" />
                </div>
            </div>*/}


        </section>
    );
};

export default Services;
