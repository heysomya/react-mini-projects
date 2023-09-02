const Buttons = ({ jobs, active, handleButton }) => {
  return (
    <div className='btn-container'>
      {jobs.map((job) => {
        return (
          <button
            key={job.id}
            className={`job-btn ${active === job.id ? 'active-btn' : ''}`}
            onClick={() => {
              return handleButton(job.id);
            }}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default Buttons;
