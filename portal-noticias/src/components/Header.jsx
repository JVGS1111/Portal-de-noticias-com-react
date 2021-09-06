import React from 'react';
import './Header.css'

function Header() {
    return (
        <header>
            <div className="container">
                <h2 className="header-logo">PORTAL DE NOTICIAS</h2>
                <nav className="header-nav">
                    <ul className="header-ul">
                        <li>Artigos</li>
                        <li>Sobre</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;