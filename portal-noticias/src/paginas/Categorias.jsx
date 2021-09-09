import React, { useEffect, useState } from 'react';
import ListaDePosts from '../components/ListaDePosts';
import { BrowserRouter as Router, useRouteMatch, useHistory, useParams } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

function Categorias() {
    const { id } = useParams()
    let history = useHistory();
    const [categoria, setCategoria] = useState()

    useEffect(() => {
        history.listen(location => {
            setCategoria('a')

        })
    })

    return (
        <main>
            <div className="container">
                <h2 className="titulo-pagina">Notícias</h2>
            </div>
            <ListaDePosts url={`/posts?categoria=${id}`} />
        </main>

    );
}

export default Categorias;