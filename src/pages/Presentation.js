import React from 'react';

const Presentation = () => {
    const cards = [
        {
            title: "Un espace naturel et apaisant",
            content:
                "Plongez dans un environnement serein, avec des cabines en bois naturel, des vues panoramiques sur la forêt et un espace conçu pour votre bien-être total.",
        },
        {
            title: "Des soins de bien-être sur mesure",
            content:
                "Offrez-vous une expérience unique avec nos soins du corps, comme l'hydrothérapie, l'aromathérapie, et des massages personnalisés pour une relaxation profonde.",
        },
        {
            title: "Des activités conviviales et sociales",
            content:
                "Participez à nos ateliers de cuisine, karaoké ou jeux de société pour renforcer les liens sociaux et vivre des moments chaleureux avec les autres.",
        },
        {
            title: "Des repas locaux et partagés",
            content:
                "Savourez des plats faits maison à partir d'ingrédients locaux dans une ambiance conviviale et détendue, parfaits pour partager un moment agréable avec vos proches.",
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
