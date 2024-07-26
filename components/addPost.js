import { useState, useEffect } from 'react';

const AddPost = ({ collection }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [added, setAdded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Submitting post', { title, content });

    try {
      const response = await fetch('/api/addpost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content, collection })
      });

      if (response.ok) {
        setAdded((prev) => !prev);
        setTitle('');
        setContent('');
      } else {
        const errorData = await response.json();
        console.error('Error adding post:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      console.log('Resetting loading state');
      setLoading(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/getposts?collection=${collection}`);
      const data = await res.json();
      console.log("use effect ran");
      setPosts(data);
    }
    fetchData();
  }, [added]);

  return (
    <>
      <h3 style={{ textAlign: "center", marginTop: "1rem" }}>Stwórz nowy post</h3>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "2rem" }}>
          <form onSubmit={handleSubmit}>
            <div>
              <p htmlFor="title">Tytuł: </p>
              <input style={{ width: "300px" }}
                type="text"
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </div>
            <div>
              <p style={{ marginTop: "1rem" }}>Treść wiadomości: </p>
              <textarea style={{ width: "300px" }}
                id="content"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Ładuje...' : 'Wyślij'}
            </button>
          </form>
        </div>
      </div>

      <div style={{ margin: "0 auto", maxWidth: "70%", display: "flex", flexDirection: "column-reverse" }}>
        {posts.map((post) => (
          <div className="card mb-3" key={post._id}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AddPost;
