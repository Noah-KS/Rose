import React from 'react';
import './HomePage.css';
import logo from '../assets/logo.png';

function HomePage() {
    return (
        <div>
        <title>Welcome to Rose</title>
        <header>
            <h1 id = "homepage-title">
                Rose
            </h1>
            <body>
            <h2 id = "homepage-subtitle">Improve Your Mental Health</h2>
            <img id = "logo-img" src={logo} alt="Logo"></img>
            </body>
        </header>
        </div>
    );
}

export default HomePage;