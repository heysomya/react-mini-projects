import { useEffect, useState } from 'react';
import data from './data';
import Review from './Review';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Reviews = () => {
  const [reviewIdx, setReviewIdx] = useState(0);

  const handlePrevClick = () => {
    setReviewIdx((reviewIdx - 1 + data.length) % data.length);
  };
  const handleNextClick = () => {
    setReviewIdx((reviewIdx + 1) % data.length);
  };
  const handleSurprise = (reviewIdx) => {
    let randomNum = Math.floor(Math.random() * data.length);
    while (randomNum === reviewIdx) {
      randomNum = Math.floor(Math.random() * data.length);
    }
    setReviewIdx(randomNum);
  };

  return (
    <div className='review'>
      <div>
        <Review {...data[reviewIdx]} />
      </div>
      <div className='btn-container'>
        <button className='prev-btn' onClick={handlePrevClick}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={handleNextClick}>
          <FaChevronRight />
        </button>
      </div>
      <button
        className='btn btn-hipster'
        onClick={() => {
          handleSurprise(reviewIdx);
        }}
      >
        Surprise Me
      </button>
    </div>
  );
};

export default Reviews;
