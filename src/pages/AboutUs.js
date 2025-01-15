import React from 'react';

const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="about-us-content">
                <h2>À propos de nous</h2>
                <p>
                    Harmony Nature est une équipe passionnée dédiée à votre bien-être, située à Lamalou-les-Bains, au cœur de la nature. Nous avons pour mission de vous offrir des services de relaxation et de bien-être dans un cadre paisible, propice à la détente.
                </p>
                <p>
                    Que ce soit pour un massage apaisant, une séance de yoga, ou tout simplement pour vous détendre et vous ressourcer, nous sommes là pour vous accompagner dans votre quête de bien-être.
                </p>
                <h3>Notre équipe</h3>
                <p>
                    Notre équipe est composée de six professionnels aux compétences variées. Chacun d'entre nous apporte son expertise unique pour vous offrir un service de qualité.
                </p>
                <p>Découvrez nos membres ci-dessous :</p>
            </div>

            <div className="team-section">
                <div className="team-member">
                    <img src={`${process.env.PUBLIC_URL}/images/kado.JPEG`} alt="Photo de synella KADO" />
                    <h4>Synella KADO</h4>
                    <p>Massothérapeute certifiée, Synella est passionnée par les bienfaits des massages pour le corps et l'esprit.</p>
                </div>
                <div className="team-member">
                    <img src={`${process.env.PUBLIC_URL}/images/loic.jpg`} alt="Membre de l'équipe" />
                    <h4>Loïc RAZAFINDRAHAINGO</h4>
                    <p>Professeur de yoga et de méditation, Loïc vous aide à trouver l'équilibre intérieur.</p>
                </div>
                <div className="team-member">
                    <img src={`${process.env.PUBLIC_URL}/images/ikram.jpeg`} alt="Membre de l'équipe" />
                    <h4>Ikram FILALI</h4>
                    <p>Coordinatrice des activités, Ikram est spécialisée dans les ateliers de groupe et de relaxation.</p>
                </div>
                <div className="team-member">
                    <img src={`${process.env.PUBLIC_URL}/images/achille.jpg`} alt="Membre de l'équipe" />
                    <h4>Achille BERGERET</h4>
                    <p>Praticien en Aromathérapie et Bien-être, Achille aide nos clients à améliorer leur bien-être à travers les huiles essentielles..</p>
                </div>
                <div className="team-member">
                    <img src={`${process.env.PUBLIC_URL}/images/othmane.jpg`} alt="Membre de l'équipe" />
                    <h4>Othmane DOUIDA</h4>
                    <p>Spécialiste en nutrition et bien-être, Othmane accompagne nos clients dans leur parcours de santé globale.</p>
                </div>
                <div className="team-member">
                    <img src={`${process.env.PUBLIC_URL}/images/honoris.jpeg`} alt="Membre de l'équipe" />
                    <h4>Honoris GRACIAS NDERYIMANA</h4>
                    <p>Conseiller en développement personnel et méditation, Honoris vous aide à trouver la paix intérieure et à développer votre confiance en vous.</p>
                </div>
            </div>

            <div className="location-info">
                <h3>Où nous trouver ?</h3>
                <p>Nous sommes situés à Lamalou-les-Bains, un endroit calme et ressourçant, idéal pour prendre soin de soi et se reconnecter à la nature.</p>
                <img src={`${process.env.PUBLIC_URL}/images/lamalou.png`} alt="Photo de lamalou les bains"/>
            </div>
        </section>
    );
};

export default AboutUs;
