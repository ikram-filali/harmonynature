import React, { useState } from 'react';

const Prestations = () => {
    const [activeTab, setActiveTab] = useState('all');

    const categories = [
        { id: 'all', name: 'Toutes les prestations' },
        { id: 'massages', name: 'Massages' },
        { id: 'facials', name: 'Soins du Visage' },
        { id: 'bodycare', name: 'Soins du Corps' },
        { id: 'bienetre', name: 'Bien-être' },
        { id: 'activities', name: 'Activités' },
        { id: 'formulas', name: 'Formules' },

    ]

    const prestations = [
        {
            category: 'massages',
            title: 'Massage aux pierres chaudes',
            duration: ['60 min', '90 min'],
            price: ['75€', '100€'],
            description: 'Un massage relaxant utilisant des pierres volcaniques chaudes pour détendre profondément les muscles et harmoniser les énergies.',
            image: '/images/massage-pierres.jpg'
        },
        {
            category: 'massages',
            title: 'Massage suédois',
            duration: ['30 min', '60 min', '90 min'],
            price: ['40€', '70€', '95€'],
            description: 'Massage tonique et relaxant, parfait pour soulager les tensions musculaires et le stress.',
            image: '/images/massage-suedois.jpg'
        },
        {
            category: 'bienetre',
            title: 'Sauna & Hammam',
            duration: ['45 min', '60 min'],
            price: ['30€', '50€'],
            description: 'Profitez des bienfaits de la chaleur sèche du sauna et de la vapeur du hammam pour une détoxification complète.',
            image: '/images/sauna.jpg'
        },
        {
            category: 'activities',
            title: 'Atelier Jardinage',
            duration: ['120 min'],
            price: ['10€'],
            description: 'Reconnectez-vous à la nature à travers le jardinage thérapeutique dans notre jardin biologique.',
            image: '/images/jardinage.jpg'
        },
        {
            category: 'activities',
            title: 'Atelier Karaoké',
            duration: ['90 min'],
            price: ['10€'],
            description: 'Participez à des soirées karaoké à thème et chantez vos chansons préférées dans une ambiance conviviale.',
            image: '/images/karaoke.jpeg'
        },
        {
            category: 'bodycare',
            title: 'Aromathérapie',
            duration: ['45 min'],
            price: ['50€'],
            description: 'Un soin qui utilise les bienfaits des huiles essentielles pour améliorer le sommeil, soulager les douleurs articulaires et harmoniser l’énergie.',
            image: '/images/aromatherapy.png',
        },
        {
            category: 'facials',
            title: 'Soin anti-âge raffermissant',
            duration: ['45 min'],
            price: ['45€'],
            description: 'Un soin conçu pour raffermir la peau, réduire les signes du vieillissement et restaurer son élasticité naturelle.',
            image: '/images/soin-anti-age.jpg',
        },
        {
            category: 'facials',
            title: 'Soin éclat et revitalisation',
            duration: ['45 min'],
            price: ['60€'],
            description: 'Un soin dynamisant pour revitaliser votre teint et offrir à votre peau un éclat naturel.',
            image: '/images/soin-eclat.jpg',
        },
        {
            category: 'activities',
            title: 'Jeux de Société',
            duration: ['60 min'],
            price: ['0€'],
            description: 'Venez participer à des jeux de société en groupe pour passer un moment convivial et divertissant.',
            image: '/images/jeux.jpg'
        },
        {
            category: 'formulas',
            title: 'Formule "Détente Nature" - ½ journée',
            duration: ['½ journée'],
            price: ['50€'],
            description: 'Idéal pour une pause relaxante en pleine forêt. Accès libre au sauna & hammam. 1 massage au choix (pierres chaudes ou suédois - 30 min). 1 séance de yoga ou méditation en extérieur.',
            image: '/images/formule-détente-nature.jpg'
        },
        {
            category: 'formulas',
            title: 'Formule "Évasion Bien-Être" - Journée complète',
            duration: ['1 journée'],
            price: ['90€'],
            description: 'Un parcours bien-être complet. Accès libre à toutes les installations (sauna, hammam). 1 massage au choix (60 min). 1 séance de yoga + 1 séance de méditation. Déjeuner inclus (buffet de plats locaux).',
            image: '/images/formule-évasion-bienetre.jpg'
        },
        {
            category: 'formulas',
            title: 'Formule "Sérénité & Lien Social"',
            duration: ['½ journée'],
            price: ['30€'],
            description: 'Pensée pour les personnes âgées cherchant à tisser du lien social. 1 activité participative au choix (karaoké, jeux de société, jardinage). Pause détente avec thé/café dans l’espace convivial. 1 soin du visage express (20 min) pour un moment de bien-être.',
            image: '/images/formule-serenite-lien-social.jpg'
        },
        {
            category: 'formulas',
            title: 'Abonnement "Zen en Forêt" - 1 mois',
            duration: ['1 mois'],
            price: ['150€/mois'],
            description: 'Pour les habitués du bien-être. 1 accès illimité au sauna/hammam. 2 activités par semaine au choix. 1 massage par semaine.',
            image: '/images/abonnement-zen-en-foret.jpg'
        },
        {
            category: 'formulas',
            title: 'Carte "10 Massages"',
            duration: ['10 massages'],
            price: ['350€'],
            description: 'Une offre économique pour les amateurs de massages. 10 massages au choix (pierres chaudes ou suédois, 45 min).',
            image: '/images/carte-10-massages.jpg'
        },
        {
            category: 'activities',
            title: 'Yoga',
            duration: ['60 min'],
            price: ['20€'],
            description: 'Une séance de yoga pour améliorer votre souplesse, votre équilibre et votre bien-être mental dans un cadre paisible.',
            image: '/images/yoga_pres.jpg'
        },
        {
            category: 'activities',
            title: 'Méditation guidée',
            duration: ['45 min'],
            price: ['15€'],
            description: 'Un moment de calme et d’introspection avec une méditation guidée pour apaiser votre esprit et réduire le stress.',
            image: '/images/meditation_pres.jpg'
        }
    ];

    return (
        <div className="prestations-page">
            <div className="prestations-hero">
                <h1>Nos Prestations</h1>
                <p>Découvrez notre sélection de soins et d'expériences bien-être</p>
            </div>

            <div className="prestations-categories">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`category-btn ${activeTab === category.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(category.id)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            <div className="prestations-grid">
                {prestations
                    .filter(item => activeTab === 'all' || item.category === activeTab)
                    .map((prestation, index) => (
                        <div
                            key={index}
                            className="prestation-card"
                        >
                            <div className="prestation-image">
                                <img
                                    src={`${process.env.PUBLIC_URL}${prestation.image}`}
                                    alt={prestation.title}
                                />
                            </div>
                            <div className="prestation-content">
                                <h3>{prestation.title}</h3>
                                <p className="prestation-description">{prestation.description}</p>
                                <div className="prestation-details">
                                    {prestation.duration.map((dur, idx) => (
                                        <div key={idx} className="price-duration">
                                            <span className="duration">{dur}</span>
                                            <span className="price">{prestation.price[idx]}</span>
                                        </div>
                                    ))}
                                </div>
                                <button className="book-btn">Réserver</button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Prestations;
