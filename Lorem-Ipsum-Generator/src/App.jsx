import { useState } from 'react';
import text from './data';
import Paragraphs from './Paragraphs';

const App = () => {
  const [count, setCount] = useState(1);
  const [length, setLength] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(length);
  };

  return (
    <main className='section-center'>
      <h4>lorem ipsum generator</h4>
      <form action='' onClick={handleSubmit} className='lorem-form'>
        <label htmlFor='length'>Paragraphs: </label>
        <input
          type='number'
          name='length'
          value={length}
          min='1'
          max='8'
          onChange={(e) => setLength(e.target.value)}
        />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <Paragraphs count={count} text={text} />
    </main>
  );
};
export default App;
