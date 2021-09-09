import React, { useEffect, useState } from 'react';
import '../assets/css/components/ListaDeCategorias.css'
import { getDado } from '../connection/api';
import { Link } from 'react-router-dom'

function ListaDeCategorias() {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        getDado('/categorias', setCategorias)
    }, [])

    return (
        <section className="lista-categorias">
            <div className="container">
                <ul className="lista-categorias-nav">
                    {
                        categorias.map(categoria => (
                            <Link to={`/categorias/${categoria.id}`}><li key={categoria.id} className="lista-categoria-item">{categoria.nome}</li></Link>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default ListaDeCategorias;