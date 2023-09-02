import { useEffect, useState } from 'react';
import Buttons from './Buttons';
// import { data } from './data';
import Jobs from './Jobs';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [active, setActive] = useState(null);

  const handleButton = (id) => {
    setActive(id);
  };

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const parsedData = await resp.json();
      setJobs(parsedData);
      setActive(parsedData[0].id);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <section>
        <div className='loading'></div>
      </section>
    );
  }

  return (
    <section className='jobs-center'>
      <Buttons jobs={jobs} active={active} handleButton={handleButton} />
      <Jobs jobs={jobs} active={active} />
    </section>
  );
};
export default App;
