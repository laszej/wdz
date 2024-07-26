import React, { useState } from 'react';

const DeleteItem = ({ onDelete }) => {
  const [index, setIndex] = useState('');

  const handleIndexChange = (event) => {
    setIndex(event.target.value);
  };

  const handleDeleteClick = () => {
    onDelete(index);
    setIndex('');
  };

  return (
    <div>
      <label>
        Indeks elementu do usunięcia:
        <input
          type="text"
          value={index}
          onChange={handleIndexChange}
        />
      </label>
      <button onClick={handleDeleteClick} disabled={!index}>
        Usuń element
      </button>
    </div>
  );
};

export default DeleteItem;
