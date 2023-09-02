const Buttons = ({ categories, handleButton }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, idx) => {
        return (
          <button
            key={idx}
            className='btn'
            onClick={() => handleButton(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Buttons;
