import React, { useEffect, useState } from 'react';
import '../assets/css/components/ListaDePosts.css'
import { getDado } from '../connection/api'
import { Link } from 'react-router-dom'

function ListaDePosts({ url }) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getDado(url, setPosts)
    }, [url])

    return (
        <section className="section-posts">
            <div className="container">
                <div className="section-posts-wrapper">
                    {
                        posts.map(post => (
                            <article key={post.id} className="post">
                                <Link className="Link" to={`/categorias/${post.categoria}`}><span className="post-categoria">{post.categoria}</span></Link>
                                
                                <h2 className="post-titulo">{post.title}</h2>
                                <p className="post-resumo">{post.metadescription}</p>
                                <Link className="Link" to={`/posts/${post.id}`} ><span className="post-botao">Ler mais</span></Link>
                            </article>
                        ))
                    }

                </div>
            </div>
        </section>
    )

}

export default ListaDePosts;