import { useState } from 'react';
import list from './data';

const App = () => {
  const [people, setPeople] = useState(list);

  const clickHandler = () => {
    setPeople([]);
  };
  return (
    <main>
      <div className='container'>
        <h3>{people.length} Birthdays Today</h3>
        {people.map((person) => {
          return (
            <div className='person' key={person.id}>
              <img src={person.image} alt={person.name} />
              <div>
                <h4>{person.name}</h4>
                <p>{person.age} years</p>
              </div>
            </div>
          );
        })}
        <button className='btn' onClick={clickHandler}>
          Clear All
        </button>
      </div>
    </main>
  );
};
export default App;
