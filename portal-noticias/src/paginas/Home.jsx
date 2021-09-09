import React from 'react';
import '../assets/css/paginas/Home.css'
import ListaDePosts from '../components/ListaDePosts';

function Home() {
    return (
        <main>
            <div className="container">
                <h2 className="titulo-pagina">Notícias</h2>
            </div>
            <ListaDePosts url={"/posts"} />
        </main>
    );
}

export default Home;