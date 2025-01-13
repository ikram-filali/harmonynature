import React from 'react';

const Planning = () => {
    const schedule = [
        { day: 'Lundi', morning: 'Cours de yoga', afternoon: '', evening: '' },
        { day: 'Mardi', morning: 'Jardinage collectif', afternoon: '🃏 Tournoi de cartes (belote, tarot) ', evening: 'Soirée Bingo' },
        { day: 'Mercredi', morning: 'Cours de yoga', afternoon: '', evening: '' },
        { day: 'Jeudi', morning: '', afternoon: '', evening: 'Soirée Karaoké à thème : "Années 80 & 90" ' },
        { day: 'Vendredi', morning: 'Cours de yoga', afternoon: '', evening: '' },
        { day: 'Samedi', morning: 'Jardinage collectif', afternoon: 'Tournoi d’échec & Scrabble ', evening: 'Soirée Karaoké Chill : "Ambiance douce et acoustique"' },
        { day: 'Dimanche', morning: 'Cours de yoga', afternoon: 'Atelier Jeux extérieurs : "Tournoi Mölkky, pétanque, défis en équipe" 🏆', evening: '' },
    ];

    return (
        <div className="planning-container">
            <h2>Planning de la semaine</h2>
            <table className="planning-table">
                <thead>
                <tr>
                    <th>Jour</th>
                    <th>Matin (10h-12h)</th>
                    <th>Après-midi (15h-17h)</th>
                    <th>Soirée (20h-22h)</th>
                </tr>
                </thead>
                <tbody>
                {schedule.map((item, index) => (
                    <tr key={index}>
                        <td>{item.day}</td>
                        <td>{item.morning}</td>
                        <td>{item.afternoon}</td>
                        <td>{item.evening}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Planning;
