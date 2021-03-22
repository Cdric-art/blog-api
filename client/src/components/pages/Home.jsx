import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loader from "../modules/Loader";

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

  console.log(posts)
  return <main className="container">
    {posts ? posts.map(post => (
      <div key={post.id} className="card">
        {console.log(post.img)}
      </div>
    )) : <Loader />}
  </main>
};

export default Home;
