import React from 'react';

const Accueil = () => {
    return (
        <div className="hero relative h-screen w-full overflow-hidden">
            {/* Image de fond */}
            <video
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                autoPlay loop muted
            >
                <source src="../../public/videos/index_video.mp4" type="video/mp4" />
            </video>

            {/* Contenu central */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center" data-aos="fade-in">
                <h1 className="text-5xl font-bold drop-shadow-lg">Bienvenue à votre Maison de Bien-être</h1>
                <p className="hero-description">
                    Un espace de bien-être, de partage et de sérénité au cœur de la nature.
                </p>
                <a href="#presentation" className="mt-8 text-lg underline">
                    ↓ Découvrez plus
                </a>
            </div>
        </div>
    );
};

export default Accueil;