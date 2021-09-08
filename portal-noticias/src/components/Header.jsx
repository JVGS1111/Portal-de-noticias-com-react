import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/css/components/Header.css'

function Header() {
    return (
        <header>
            <div className="container">
                <h2 className="header-logo">
                    <Link to="/">PORTAL DE NOTICIAS</Link>
                </h2>
                <nav className="header-nav">
                    <ul className="header-ul">
                        <li className="header-li">Artigos</li>
                        <Link to="/sobre"><li className="header-li">Sobre</li></Link>
                        <li className="header-li">Entrar</li>
                    </ul>
                </nav>
            </div>
            <div className="clear"></div>
        </header>
    );
}

export default Header;