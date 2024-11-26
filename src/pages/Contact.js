import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="h-screen bg-white flex items-center justify-center" data-aos="fade-up">
            <div className="text-center max-w-lg">
                <h2 className="text-4xl font-bold mb-6">Contactez-nous</h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Nom"
                        className="block w-full p-2 border border-gray-300"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="block w-full p-2 border border-gray-300"
                    />
                    <textarea
                        placeholder="Message"
                        className="block w-full p-2 border border-gray-300"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white p-2 mt-4"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
