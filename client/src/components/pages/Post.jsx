import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import PostItems from "../modules/PostItems";
import Loader from "../modules/Loader";
import axios from "axios";

const Post = () => {

  const {id} = useParams();
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_URL_API}/posts/${id}`
    })
      .then(response => setPost(response.data))
      .catch(err => console.error({err}))
  }, [id])

  console.log(post);

  return (
    <main className="container">
      <Link to="/">Retour accueil</Link>
      {
        post ? <PostItems key={id} post={post.post} showDetail={true}/>
          : <Loader/>
      }
    </main>
  );
};

export default Post;
