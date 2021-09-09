import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import '../assets/css/paginas/Post.css'
import { getDado } from '../connection/api';

function Post() {
    let history = useHistory()
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        getDado(`/posts/${id}`, setPost)
            .catch(() => {
                history.push('/404')
            })
    }, [])

    return (
        <main className="container main-post">
            <article className="artigo-post">
                <span className="artigo-categoria">{post.categoria}</span>
                <h2 className="artigo-titulo">{post.title}</h2>
                <h3 className="artigo-descricao">{post.metadescription}</h3>
                <p className="artigo-texto">{post.body}</p>
            </article>
        </main>
    );
}

export default Post;