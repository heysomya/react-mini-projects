import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './Items';
import { ToastContainer, toast } from 'react-toastify';

const getLocalStorage = (item) => {
  let list = localStorage.getItem('list');
  if (list) {
    list = JSON.parse(list);
  } else {
    list = [];
  }
  return list;
};

const setLocalStorage = (item) => {
  localStorage.setItem('list', JSON.stringify(item));
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage);

  const updateItems = (item) => {
    const newId = nanoid();
    const newItems = [...items, { id: newId, completed: false, name: item }];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item Added');
  };

  const removeItems = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item Deleted');
  };

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <main className='section-center'>
      <ToastContainer position='top-right' theme='dark' autoClose={1000} />
      <Form updateItems={updateItems} />
      <Items items={items} removeItems={removeItems} editItem={editItem} />
    </main>
  );
};

export default App;
