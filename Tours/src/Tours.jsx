import Tour from './Tour';

const Tours = (props) => {
  const { tours, removeTour } = props;
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {tours.map((tour) => {
          return <Tour {...tour} removeTour={removeTour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
