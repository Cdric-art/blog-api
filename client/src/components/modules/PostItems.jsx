import React from 'react';
import { Link } from "react-router-dom";

const PostItems = ({ post }) => {
  return <Link to={`/post/:${post.id}`} className="card">
    <img src={`${process.env.REACT_APP_PUBLIC_URL}/${post.img}`} alt={post.title} />
    <h2>{post.title}</h2>
    <p>{post.content}</p>
    <div>
      <span>{post.created_at}</span>
      <span>{post.update_at}</span>
    </div>
  </Link>
};

export default PostItems;
