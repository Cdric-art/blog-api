import React from 'react';
import { Link } from "react-router-dom";
import { dateParser } from "../libs/date";

const PostItems = ({post, showDetail}) => {
    return <Link to={`/post/${post.id}`} className="card">
        <h2>{post.title}</h2>
        <div className="date">
            <span>Crée le : <br/>{dateParser(post.created_at)}</span>
            <span>Mis à jour le : <br/>{dateParser(post.updated_at)}</span>
        </div>
        {showDetail && post.img ? (
            <img src={`../${process.env.REACT_APP_PUBLIC_URL}/${post.img}`} alt={post.title}/>
        ) : post.img ? (
            <img src={`${process.env.REACT_APP_PUBLIC_URL}/${post.img}`} alt={post.title}/>
        ) : null }
        {showDetail && <p>{post.content}</p>}
    </Link>
};

export default PostItems;
