import React from 'react';

const Presentation = () => {
    const cards = [
        {
            title: "Élégance marocaine authentique",
            content:
                "Plongez dans l’univers du caftan et de la djellaba marocains, où chaque création allie savoir-faire artisanal et raffinement intemporel. Chaque pièce est pensée pour sublimer la beauté naturelle tout en préservant l’âme du patrimoine marocain.",
        },
        {
            title: "Créations sur mesure et personnalisées",
            content:
                "Offrez-vous une expérience unique avec nos modèles confectionnés à la main, ajustés à votre morphologie et vos préférences. Choisissez vos tissus, vos broderies et vos couleurs pour une tenue unique, élégante et parfaitement adaptée à votre style."
        },
        {
            title: "Qualité, durabilité et innovation",
            content:
                "Nos collections marient techniques traditionnelles et technologies modernes : couture fine, finitions haut de gamme, matériaux écoresponsables et design assisté par ordinateur. Un engagement pour une mode durable et des créations qui traversent le temps.",
        },
        {
            title: "Une expérience partagée et inspirante",
            content:
                "Découvrez nos collections exclusives en ligne ou lors d’événements et défilés. Nous célébrons la féminité, la culture et la créativité marocaine à travers chaque création, en valorisant les artisans locaux et l’art du détail.",
        },
    ];

    return (
        <section id="presentation" className="presentation-section">
            <h2 className="text-4xl font-bold mb-8 text-center text-heading">Découvrez Loubna Couture</h2>
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
