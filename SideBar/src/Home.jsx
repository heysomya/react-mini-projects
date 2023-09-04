import { useGlobalContext } from './context';
import { FaBars } from 'react-icons/fa';

const Home = () => {
  const { toggleSidebar, toggleModal } = useGlobalContext();
  return (
    <main>
      <button onClick={toggleSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <button onClick={toggleModal} className='btn'>
        Show Modal
      </button>
    </main>
  );
};
export default Home;
