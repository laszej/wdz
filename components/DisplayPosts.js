import { useState, useEffect } from 'react';

const DisplayPosts = ({ collection }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/getposts?collection=${collection}`);
      const data = await res.json();
      setPosts(data);
    }
    fetchData();
  }, [collection]);

  return (
    
    
    <div style={{ margin: "0 auto", maxWidth: "70%", display: "flex", flexDirection: "column-reverse" }}>
      {posts.map((post) => (
        <div className="card mb-3" key={post._id}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <p className="card-text"><small className="text-muted">{new Date(post.createdAt).toLocaleString()}</small></p>
          </div>
        </div>
      ))}
    </div>
    
  );
};

export default DisplayPosts;
