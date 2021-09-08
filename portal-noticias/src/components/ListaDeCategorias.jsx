import React, { useEffect, useState } from 'react';
import '../assets/css/components/ListaDeCategorias.css'
import { getDado } from '../connection/api';

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
                            <li key={categoria.id} className="lista-categoria-item">{categoria.nome}</li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default ListaDeCategorias;