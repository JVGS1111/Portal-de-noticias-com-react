import React from 'react';
import '../assets/css/paginas/Sobre.css'
function Sobre() {
    return (
        <main className="main-sobre">
            <div className="container">
                <h2 className="titulo-sobre">Sobre</h2>
                <div className="sobre-texto-wrapper">
                    <p className="sobre-texto">Este é um pequeno portal de noticias feito com React,
                        criei este projeto para aprender React, neste projeto apliquei componentes
                        funcionais, rotas e hooks.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Sobre;