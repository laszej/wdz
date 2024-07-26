import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function DeleteLatestBlog() {
  const router = useRouter();
  const [blogs, setBlogs] = useState(null);

  async function fetchLatestBlog() {
    const res = await fetch('/api/blogs');
    const blogs = await res.json();
    setBlogs(blogs);
  }

  async function deleteLatestBlog() {
  

    const response = await fetch(`/api/deleteblog`, {
      method: 'DELETE',
    });

    if (response.ok) {
      
    } else {
      console.error('Could not delete blog');
    }
  }

  useEffect(() => {
    fetchLatestBlog();
  }, []);

  return (
    <div>
      <h1>Delete Latest Blog</h1>
      {blogs ? (
        <div>
          <p>Are you sure you want to delete the latest blog post?</p>
          <button onClick={deleteLatestBlog}>Delete</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DeleteLatestBlog;