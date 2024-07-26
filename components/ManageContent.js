import { useState, useEffect } from 'react';

const ManageContent = ({ collection }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [added, setAdded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Submitting item', { title, content });

    try {
      const response = await fetch('/api/additem', {
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
        console.error('Error adding item:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      console.log('Resetting loading state');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/deleteitem?id=${id}&collection=${collection}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setAdded((prev) => !prev);
      } else {
        const errorData = await response.json();
        console.error('Error deleting item:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/getitems?collection=${collection}`);
      const data = await res.json();
      console.log("use effect ran");
      setItems(data);
    }
    fetchData();
  }, [added, collection]);

  return (
    <>
      <h3 style={{ textAlign: "center", marginTop: "1rem" }}>{collection === 'yourPosts' ? 'Dodaj nowy post' : 'Dodaj nowy komentarz'}</h3>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "2rem" }}>
          <form onSubmit={handleSubmit}>
            <div>
              <p htmlFor="title">{collection === 'yourPosts' ? 'Tytuł:' : 'Autor:'}</p>
              <input style={{ width: "300px" }}
                type="text"
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </div>
            <div>
              <p style={{ marginTop: "1rem" }}>{collection === 'yourPosts' ? 'Treść wiadomości:' : 'Treść komentarza:'}</p>
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
        {items.map((item) => (
          <div className="card mb-3" key={item._id}>
            <div className="card-body">
              <h5 className="card-title">{collection === 'yourPosts' ? item.title : item.author}</h5>
              <p className="card-text">{collection === 'yourPosts' ? item.content : item.comment}</p>
              <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>
                Usuń
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ManageContent;
