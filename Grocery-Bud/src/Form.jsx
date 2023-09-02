import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ updateItems }) => {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      toast.error('Item cannot be empty');
      return;
    }
    updateItems(item);
    setItem('');
  };
  return (
    <div>
      <form action='' onSubmit={handleSubmit}>
        <h4>Grocery Buddy</h4>
        <div className='form-control'>
          <input
            type='text'
            value={item}
            className='form-input'
            onChange={(e) => setItem(e.target.value)}
          />
          <button type='submit' className='btn'>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
