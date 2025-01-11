import React from 'react';

const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="about-us-content">
                <h2>À propos de nous</h2>
                <p>
                    Harmony Nature est une équipe passionnée de six professionnels dédiés à votre bien-être, située à Lamalou-les-Bains, au cœur de la nature. Nous avons pour mission de vous offrir des services de relaxation et de bien-être dans un cadre paisible, propice à la détente.
                </p>
                <p>
                    Que ce soit pour un massage apaisant, une séance de yoga, ou tout simplement pour vous détendre et vous ressourcer, nous sommes là pour vous accompagner dans votre quête de bien-être.
                </p>
                <h3>Notre équipe</h3>
                <p>
                    Notre équipe est composée de six professionnels aux compétences variées. Chacun d'entre nous apporte son expertise unique pour vous offrir un service de qualité. Découvrez nos membres ci-dessous :
                </p>
            </div>
            {/*
            <div className="team-section">
                <div className="team-member">
                    <img src={`${process.env.PUBLIC_URL}/images/team-member1.jpg`} alt="Membre de l'équipe" />
                    <h4>Marie Dupont</h4>
                    <p>Massothérapeute certifiée, Marie est passionnée par les bienfaits des massages pour le corps et l'esprit.</p>
                </div>
                <div className="team-member">
                    <img src={`${process.env.PUBLIC_URL}/images/team-member2.jpg`} alt="Membre de l'équipe" />
                    <h4>John Doe</h4>
                    <p>Professeur de yoga et de méditation, John vous aide à trouver l'équilibre intérieur.</p>
                </div>
                <div className="team-member">
                    <img src={`${process.env.PUBLIC_URL}/images/team-member3.jpg`} alt="Membre de l'équipe" />
                    <h4>Emma Leclerc</h4>
                    <p>Coordinatrice des activités, Emma est spécialisée dans les ateliers de groupe et de relaxation.</p>
                </div>
                <div className="team-member">
                    <img src={`${process.env.PUBLIC_URL}/images/team-member4.jpg`} alt="Membre de l'équipe" />
                    <h4>Lucas Martin</h4>
                    <p>Réflexologue et expert en techniques de relaxation, Lucas aide à relâcher les tensions physiques et émotionnelles.</p>
                </div>
                <div className="team-member">
                    <img src={`${process.env.PUBLIC_URL}/images/team-member5.jpg`} alt="Membre de l'équipe" />
                    <h4>Sophie Dufresne</h4>
                    <p>Spécialiste en nutrition et bien-être, Sophie accompagne nos clients dans leur parcours de santé globale.</p>
                </div>
                <div className="team-member">
                    <img src={`${process.env.PUBLIC_URL}/images/team-member6.jpg`} alt="Membre de l'équipe" />
                    <h4>Paul Lemoine</h4>
                    <p>Conseiller en développement personnel, Paul vous aide à trouver la paix intérieure et à développer votre confiance en vous.</p>
                </div>
            </div> */}

            <div className="location-info">
                <h3>Où nous trouver ?</h3>
                <p>Nous sommes situés à Lamalou-les-Bains, un endroit calme et ressourçant, idéal pour prendre soin de soi et se reconnecter à la nature.</p>
            </div>
        </section>
    );
};

export default AboutUs;
