import React from 'react';

const Login = () => {
    return (
        <section id="login">
            <div className="login-container">
                <h2>Connectez-vous</h2>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Mot de passe" required />
                    <button type="submit">Se Connecter</button>
                </form>
            </div>
        </section>
    );
};

export default Login;
