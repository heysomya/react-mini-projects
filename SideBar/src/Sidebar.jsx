import { useGlobalContext } from './context';
import { links, social } from './data';
import { FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const { sidebarVisibility, toggleSidebar } = useGlobalContext();
  return (
    <div
      className={
        sidebarVisibility ? 'sidebar-overlay show-sidebar' : 'sidebar-overlay'
      }
    >
      <div className='header'>
        <span>Somya.bio</span>
        <button className='close-sidebar-btn' onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>
      <div className='links-container'>
        {links.map((link) => {
          return (
            <div key={link.id} className='link'>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </div>
          );
        })}
      </div>
      <div className='socials-container'>
        {social.map((item) => {
          return (
            <a href={item.url} key={item.id} className='icon'>
              {item.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Sidebar;
