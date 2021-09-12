import React from 'react';
import ListaDePosts from '../components/ListaDePosts';
import { Route, useRouteMatch, useParams } from 'react-router-dom'
import ListaDeCategorias from '../components/ListaDeCategorias';

function Categorias() {
    const { id } = useParams()
    const { path } = useRouteMatch()

    return (
        <>
        <ListaDeCategorias />
        <main>
            <div className="container">
                <h2 className="titulo-pagina">Notícias</h2>
            </div>
            <Route exact path={`${path}/`}>
                 <ListaDePosts url={`/posts?categoria=${id}`} />
            </Route>
        </main>
        </>
    );
}

export default Categorias;