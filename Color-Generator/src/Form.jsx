import { useState } from 'react';

const Form = ({ addColor }) => {
  const [color, setColor] = useState('#111111');

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className='container'>
      <h4>Color Generator</h4>
      <form action='' className='color-form' onSubmit={handleSubmit}>
        <input
          type='color'
          name='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          name='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button
          type='submit'
          className='btn'
          style={{ backgroundColor: color }}
        >
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;
