import React from 'react';
import { useParams } from "react-router-dom";

const Post = () => {

  const { id } = useParams();

  return (
    <main className="container">
      <h2>{id}</h2>
    </main>
  );
};

export default Post;
