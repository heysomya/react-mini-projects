import { v4 as uuidv4 } from 'uuid';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Jobs = ({ jobs, active }) => {
  const job = jobs.filter((item) => item.id === active);
  const { id, title, dates, duties, company } = job[0];
  return (
    <article key={id}>
      <h3 className='title'>{title}</h3>
      <div className='job-company'>{company}</div>
      <div className='job-date'>{dates}</div>
      <div>
        {duties.map((duty) => {
          const uid = uuidv4();
          return (
            <div className='job-desc' key={uid}>
              <div className='job-icon'>
                <FaAngleDoubleRight />
              </div>
              <p>{duty}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
};
export default Jobs;
