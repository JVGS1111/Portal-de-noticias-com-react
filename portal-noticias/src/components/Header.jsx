import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header>
            <div className="container">
                <h2 className="header-logo">PORTAL DE NOTICIAS</h2>
                <nav className="header-nav">
                    <ul className="header-ul">
                        <li className="header-li">Artigos</li>
                        <li className="header-li">Sobre</li>
                        <li className="header-li">Entrar</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;