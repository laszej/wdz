import React, { useState } from 'react';
import DeleteItem from './Deleteitem';

const MyComponent = () => {
  const [items, setItems] = useState(['item 1', 'item 2', 'item 3']);

  const handleDeleteItem = (indexToDelete) => {
    const updatedItems = items.filter((item, index) => index !== parseInt(indexToDelete, 10));
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Usuwanie elementów</h1>
      <DeleteItem onDelete={handleDeleteItem} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;