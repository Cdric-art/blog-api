import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loader from "../modules/Loader";
import PostItems from "../modules/PostItems";

const Home = () => {

  const [posts, setPosts] = useState(null)

  useEffect(() => {
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_URL_API}/posts`
    })
      .then(response => setPosts(response.data))
      .catch(err => console.error({ err }))
  }, [])

  return <main className="container">
    {posts ? posts.map(post => (
      <PostItems key={post.id} post={post} showDetail={false}/>
    )) : <Loader />}
  </main>
};

export default Home;
