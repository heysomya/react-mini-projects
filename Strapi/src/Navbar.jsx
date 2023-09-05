import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import Navlinks from './Navlinks';

const Navbar = () => {
  const { setPageId, toggleSidebar } = useGlobalContext();
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <h3 className='logo'>Strapi</h3>
        <button className='toggle-btn' onClick={toggleSidebar}>
          <FaBars />
        </button>
        <Navlinks />
      </div>
    </nav>
  );
};
export default Navbar;
