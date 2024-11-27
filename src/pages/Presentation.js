import React from 'react';

const Presentation = () => {
    const cards = [
        {
            title: "Un espace chaleureux",
            content:
                "Nichée au cœur de la nature, notre maison est un havre de paix où authenticité et convivialité se rencontrent.",
        },
        {
            title: "Des activités collaboratives",
            content:
                "Participez à nos ateliers de cuisine, jardinage ou artisanat et vivez des moments de partage et d’apprentissage.",
        },
        {
            title: "Un bien-être total",
            content:
                "Découvrez nos massages, séances de yoga, méditation et autres activités dédiées à votre détente.",
        },
        {
            title: "Repas partagés",
            content:
                "Rejoignez-nous autour d’une table conviviale pour savourer des plats faits maison, avec des ingrédients locaux.",
        },
    ];

    return (
        <section id="presentation" className="presentation-section">
            <h2 className="text-4xl font-bold mb-8 text-center text-heading">Découvrez Harmony Nature</h2>
            <div className="card-container">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="card"
                        data-aos="fade-up"
                        data-aos-delay={`${index * 100}`} // Décalage progressif des animations
                    >
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-content">{card.content}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Presentation;
