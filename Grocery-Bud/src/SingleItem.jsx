import { useState } from 'react';

const SingleItem = ({ item, removeItems, editItem }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textDecorationLine: `${item.completed ? 'line-through' : 'none'}`,
        }}
      >
        {item.name}
      </p>
      <button className='btn remove-btn' onClick={() => removeItems(item.id)}>
        Delete
      </button>
    </div>
  );
};
export default SingleItem;
