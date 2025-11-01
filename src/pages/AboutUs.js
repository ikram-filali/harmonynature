import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us" aria-labelledby="about-title">
      {/* Carte blanche pour le texte */}
      <div className="about-card">
        <h2 id="about-title">À propos de nous</h2>

        <div className="about-grid">
          {/* Colonne gauche : présentation */}
          <div>
            <p>
              Bienvenue chez <strong>Loubna Couture</strong>, maison spécialisée dans la création d’<em>habits traditionnels marocains</em> —
              caftans, djellabas, abayas et tenues sur mesure — revisités avec une touche contemporaine qui respecte l’authenticité
              de notre patrimoine.
            </p>
            <p>
              Fondée par <strong>Loubna Khatib</strong>, diplômée en modélisme et forte d’une expérience confirmée en couture et en
              commerce des tissus à Casablanca, la marque allie savoir-faire artisanal
              (sfifa, aâkad, broderies, finitions main) et approche moderne du design et du service.
            </p>

            <ul className="about-list" aria-label="Points forts">
              <li>Collections exclusives : pièces saisonnières en séries limitées.</li>
              <li>Sur-mesure : conception personnalisée selon la morphologie, le style et l’occasion.</li>
              <li>Qualité & finitions : tissus sélectionnés, coupe soignée, contrôle qualité avant livraison.</li>
              <li>Démarche responsable : réduction des chutes, réparations/retouches, priorité aux fournisseurs locaux.</li>
            </ul>

            <p>
              Notre mission : valoriser l’art de la couture marocaine et offrir des pièces uniques qui racontent votre histoire.
              Notre ambition : faire de Loubna Couture une référence nationale et internationale de l’élégance marocaine durable.
            </p>
          </div>

          {/* Colonne droite : carte localisation encadrée */}
          <div className="location-card">
            <h3>Où nous trouver ?</h3>

            <div className="location-info">
              <div className="contact-cards" role="list">
                <div className="contact-card" role="listitem">
                  <h4>Adresse</h4>
                  <p>
                    Dar Loubna Couture<br />
                    Lotissement Gssous Km 17, N°46<br />
                    Aïn Harrouda – Mohammedia, Maroc
                  </p>
                </div>

                <div className="contact-card" role="listitem">
                  <h4>Horaires</h4>
                  <p>Du lundi au samedi : 10h00 – 19h00</p>
                  <p>Dimanche : fermé</p>
                </div>

                <div className="contact-card" role="listitem">
                  <h4>Contact</h4>
                  <p>
                    📞 <a href="tel:+212630723402">+212 6 30 72 34 02</a><br />
                    ✉️ <a href="mailto:khatibkhatib8484@gmail.com">khatibkhatib8484@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="map-container" aria-label="Carte Google Maps Aïn Harrouda – Mohammedia">
                <iframe
                  title="Localisation Loubna Couture"
                  src="https://www.google.com/maps?q=A%C3%AFn+Harrouda,+Mohammedia,+Maroc&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
