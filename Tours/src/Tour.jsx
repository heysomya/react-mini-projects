import { useState } from 'react';

const Tour = (props) => {
  const { id, image, info, name, price, removeTour } = props;

  const [readMore, setReadMore] = useState(false);
  return (
    <div className='single-tour'>
      <span className='tour-price'>${price}</span>
      <img src={image} alt={name} className='img' />
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button className='info-btn' onClick={() => setReadMore(!readMore)}>
          {readMore ? 'show less' : 'read more'}
        </button>
      </div>
      <div style={{ margin: '2rem 1rem' }}>
        <button
          className='btn delete-btn btn-block '
          onClick={() => {
            removeTour(id);
          }}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};
export default Tour;
