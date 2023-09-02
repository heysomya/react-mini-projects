import { FaQuoteLeft } from 'react-icons/fa';
const Review = ({ id, name, job, image, text }) => {
  return (
    <div key={id}>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name} />
        <div className='quote-icon'>
          <FaQuoteLeft />
        </div>
      </div>
      <h4 className='author'>{name}</h4>
      <h5 className='job'>{job}</h5>
      <p className='info'>{text}</p>
    </div>
  );
};
export default Review;
