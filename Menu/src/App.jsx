import { useState } from 'react';
import Buttons from './Buttons';
import Menu from './Menu';
import data from './data';
import Title from './Title';

const App = () => {
  const tempCategories = new Set();
  data.map((item) => tempCategories.add(item.category));
  const categories = ['all', ...tempCategories];

  const [menu, setMenu] = useState(data);

  const handleButton = (category) => {
    if (category === 'all') {
      return setMenu(data);
    }
    const newData = data.filter((item) => item.category === category);
    setMenu(newData);
  };

  return (
    <main>
      <section className='menu'>
        <Title />
        <Buttons categories={categories} handleButton={handleButton} />
        <Menu menu={menu} />
      </section>
    </main>
  );
};
export default App;
