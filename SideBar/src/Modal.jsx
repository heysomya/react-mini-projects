import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';

const Modal = () => {
  const { modalVisibility, toggleModal } = useGlobalContext();

  return (
    <div
      className={modalVisibility ? 'modal-overlay show-modal' : 'modal-overlay'}
    >
      <div className='modal-container'>
        <h3>Modal Content</h3>
        <button className='close-modal-btn' onClick={toggleModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Modal;
