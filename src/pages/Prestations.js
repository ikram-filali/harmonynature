import React, { useState } from 'react';

const Prestations = () => {
    const [activeTab, setActiveTab] = useState('all');

    const categories = [
        { id: 'all', name: 'Toutes les collections' },
        { id: 'Caftanfemmes', name: 'Caftans femme' },
        { id: 'DjellabasFemme', name: 'Djellabas Femme' },
        { id: 'TenuesHomme', name: 'Tenues Homme' },
        { id: 'CollectionEnfants', name: 'Collection Enfants' },
        { id: 'Abayas', name: 'Abayas & Modern Styles' },
        {/*{ id: 'Accessoires', name: 'Accessoires & Détails' },*/}

    ]

    const prestations = [
        {
            category: 'Caftanfemmes',
            title: 'Caftan Lilas Royal',
            price: ['890 MAD'],
            description: 'Un caftan fluide couleur lilas orné de broderies dorées délicates. Sa coupe légère et son tissu satiné offrent un tombé raffiné, idéal pour les soirées estivales et les cérémonies.',
            image: '/images/caftanfemme 4.jpg'
        },
        {
            category: 'Caftanfemmes',
            title: 'Caftan Noir Élégance',
            price: ['900 MAD'],
            description: 'Un caftan noir en dentelle fine, sublimé par une ceinture perlée et des finitions en pompons. Élégant et mystérieux, il incarne la féminité moderne dans toute sa grâce.',
            image: '/images/caftanfemme 3.jpeg'
        },
        {
            category: 'Caftanfemmes',
            title: 'Caftan Blanc Perlé',
            price: ['750 MAD'],
            description: 'Un modèle d’exception en dentelle blanche, rehaussé d’une ceinture dorée et de perles discrètes. Parfait pour les mariages, fiançailles ou soirées chics, il évoque la pureté et le raffinement.',
            image: '/images/caftanfemme 2.jpeg'
        },
        {
            category: 'Caftanfemmes',
            title: 'Caftan Ivoire Doré',
            price: ['980 MAD'],
            description: 'Un caftan ivoire orné de broderies dorées scintillantes. Léger et majestueux, il marie tradition et modernité pour un look royal en toute occasion.',
            image: '/images/caftanfemme 1.jpg'
        },
        {
            category: 'DjellabasFemme',
            title: 'Djellaba Émeraude Élégance',
            price: ['790 MAD'],
            description: 'Une djellaba en satin vert émeraude, mise en valeur par une broderie dorée raffinée. Sa fluidité et sa coupe ample offrent confort et prestance pour toutes vos occasions.',
            image: '/images/djellabafemme1.jpg'
        },{
            category: 'DjellabasFemme',
            title: 'Djellaba Bleu Majesté',
            price: ['820 MAD'],
            description: 'Ce modèle bleu nuit séduit par sa sobriété et ses boutons dorés au style andalou. Parfaite pour une allure chic et distinguée au quotidien ou en soirée.',
            image: '/images/djellabafemme4.jpg'
        },{
            category: 'DjellabasFemme',
            title: 'Djellaba Royale',
            price: ['850 MAD'],
            description: 'Confectionnée dans un tissu bleu royal, cette djellaba à capuche associe élégance traditionnelle et modernité. Idéale pour un look authentique et raffiné.',
            image: '/images/djellabafemme3.jpg'
        },{
            category: 'DjellabasFemme',
            title: 'Djellaba Bordeaux Doré',
            price: ['830 MAD'],
            description: 'Une pièce classique et luxueuse, alliant la richesse du bordeaux à des finitions dorées subtiles. Une tenue qui incarne la féminité marocaine dans toute sa splendeur.',
            image: '/images/djellabafemme2.jpg'
        },
        {
            category: 'TenuesHomme',
            title: 'Djellaba Noire Classique',
            price: ['720 MAD'],
            description: 'Une djellaba noire élégante au style sobre et raffiné. Son tissu doux et sa coupe ample offrent un confort idéal pour les journées fraîches ou les occasions religieuses.',
            image: '/images/djellabaHOMME1.jpg'
        },
        {
            category: 'TenuesHomme',
            title: 'Djellaba Rayée Traditionnelle',
            price: ['760 MAD'],
            description: 'Ce modèle à rayures vert foncé allie authenticité et distinction. Légère et fluide, elle incarne parfaitement l’élégance masculine marocaine.',
            image: '/images/djellabaHOMME4.png'
        },
        {
            category: 'TenuesHomme',
            title: 'Jabador Bordeaux Doré',
            price: ['890 MAD'],
            description: 'Un ensemble deux pièces en satin bordeaux, bordé de finitions dorées. À la fois moderne et traditionnel, il est parfait pour les célébrations et les soirées spéciales.',
            image: '/images/djellabaHOMME3.jpg'
        },
        {
            category: 'TenuesHomme',
            title: 'Gandoura Marron Prestige',
            price: ['780 MAD'],
            description: 'Une gandoura marocaine revisitée, confectionnée dans un tissu fluide et orné d’une broderie blanche discrète. Un style à la fois décontracté et raffiné.',
            image: '/images/djellabaHOMME2.jpg'
        },
        {
            category: 'CollectionEnfants',
            title: 'Caftan Fille Blanc Doré',
            price: ['590 MAD'],
            description: 'Un caftan blanc lumineux orné de broderies dorées et d’une fine ceinture assortie. Parfait pour les grandes occasions et les cérémonies.',
            image: '/images/caftanfille.jpg',
        },
        {
            category: 'CollectionEnfants',
            title: 'Djellaba Fille Bleu Pastel',
            price: ['540 MAD'],
            description: 'Cette djellaba à capuche séduit par sa couleur douce et ses finitions perlées. Une pièce délicate qui allie charme enfantin et élégance traditionnelle.',
            image: '/images/djellabafille.jpg',
        },
        {
            category: 'CollectionEnfants',
            title: 'Jabador Garçon Bleu Ciel',
            price: ['520 MAD'],
            description: 'Un jabador moderne et raffiné, confectionné dans un tissu doux bleu clair avec des broderies argentées. Idéal pour les fêtes et les cérémonies familiales.',
            image: '/images/jabadorgarcon.jpg',
        },
        {
            category: 'CollectionEnfants',
            title: 'Djellaba Garçon Noire Classique',
            price: ['490 MAD'],
            description: 'Une djellaba légère et élégante en tissu noir fin, parfaite pour les jeunes garçons. Inspirée du style marocain traditionnel, elle allie confort et distinction.',
            image: '/images/djellabagarcon.jpg',
        },
        {
            category: 'Abayas',
            title: 'Abaya Noire Brodée Élégance',
            price: ['890 MAD'],
            description: 'Une abaya noire somptueuse ornée de broderies argentées sur les manches et le long du devant. Sa coupe fluide et sa ceinture tressée soulignent la silhouette avec finesse.',
            image: '/images/KIMONO.jpg',
        },
        {
            category: 'Abayas',
            title: 'Abaya Verte Douceur',
            price: ['870 MAD'],
            description: 'Légère et aérienne, cette abaya vert sauge séduit par ses manches évasées et sa matière fluide. Un modèle chic et discret, parfait pour un style naturel et élégant.',
            image: '/images/ABAYA3.jpg',
        },
        {
            category: 'Abayas',
            title: 'Abaya Taupe Prestige',
            price: ['920 MAD'],
            description: 'Un design raffiné en satin taupe avec finitions dorées et ceinture à pompons. Elle offre un équilibre parfait entre sobriété et sophistication.',
            image: '/images/ABAYA2.jpg',
        },
        {
            category: 'Abayas',
            title: 'Abaya Orientale Chic',
            price: ['850 MAD'],
            description: 'Une abaya longue ornée de motifs dorés raffinés, à la croisée de l’élégance moderne et de la tradition marocaine. Parfaite pour sublimer vos tenues avec grâce et distinction.',
            image: '/images/ABAYA1.jpg',
        }/*,
        {
            category: 'TenuesHomme',
            title: 'Jeux de Société',
            duration: ['60 min'],
            price: ['0€'],
            description: 'Venez participer à des jeux de société en groupe pour passer un moment convivial et divertissant.',
            image: '/images/jeux.jpg'
        }
        
        {
            category: 'Accessoires',
            title: 'Formule "Détente Nature" - ½ journée',
            duration: ['½ journée'],
            price: ['50€'],
            description: 'Idéal pour une pause relaxante en pleine forêt. Accès libre au sauna & hammam. 1 massage au choix (pierres chaudes ou suédois - 30 min). 1 séance de yoga ou méditation en extérieur.',
            image: '/images/formule-détente-nature.jpg'
        },
        {
            category: 'Accessoires',
            title: 'Formule "Évasion Bien-Être" - Journée complète',
            duration: ['1 journée'],
            price: ['90€'],
            description: 'Un parcours bien-être complet. Accès libre à toutes les installations (sauna, hammam). 1 massage au choix (60 min). 1 séance de yoga + 1 séance de méditation. Déjeuner inclus (buffet de plats locaux).',
            image: '/images/formule-évasion-Djellabas Femme.jpg'
        },
        {
            category: 'Accessoires',
            title: 'Formule "Sérénité & Lien Social"',
            duration: ['½ journée'],
            price: ['30€'],
            description: 'Pensée pour les personnes âgées cherchant à tisser du lien social. 1 activité participative au choix (karaoké, jeux de société, jardinage). Pause détente avec thé/café dans l’espace convivial. 1 soin du visage express (20 min) pour un moment de bien-être.',
            image: '/images/formule-serenite-lien-social.jpg'
        },
        {
            category: 'Accessoires',
            title: 'Abonnement "Zen en Forêt" - 1 mois',
            duration: ['1 mois'],
            price: ['150€/mois'],
            description: 'Pour les habitués du bien-être. 1 accès illimité au sauna/hammam. 2 activités par semaine au choix. 1 massage par semaine.',
            image: '/images/abonnement-zen-en-foret.jpg'
        },
        {
            category: 'Accessoires',
            title: 'Carte "10 Caftanfemmes"',
            duration: ['10 Caftanfemmes'],
            price: ['350€'],
            description: 'Une offre économique pour les amateurs de Caftanfemmes. 10 Caftanfemmes au choix (pierres chaudes ou suédois, 45 min).',
            image: '/images/carte-10-Caftanfemmes.jpg'
        },*/
        
    ];

    return (
        <div className="prestations-page">
            <div className="prestations-hero">
                <h1>Nos Collections</h1>
                <p>Découvrez notre sélection de tenues marocaines alliant authenticité, élégance et modernité.</p>
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
                                <span className="price">{prestation.price}</span>
                                {/*<div className="prestation-details">
                                    {prestation.duration.map((dur, idx) => (
                                        <div key={idx} className="price-duration">
                                            <span className="duration">{dur}</span>
                                            <span className="price">{prestation.price[idx]}</span>
                                        </div>
                                    ))}
                                    <span className="price">{prestation.price}</span>
                                </div>*/}
                                <button className="book-btn">Réserver</button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Prestations;
