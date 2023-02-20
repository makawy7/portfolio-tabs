import Company from "./Company";
import Info from "./Info";
import { useCallback, useEffect, useState } from "react";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [current, setCurrent] = useState({});
  const [duties, setDuties] = useState([]);

  const getData = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setCurrent(data[0]);
    setDuties(data[0].duties);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const changeCurrent = (id) => {
    const cuCompany = jobs.filter((job) => job.id === id);
    setCurrent(cuCompany[0]);
    setDuties(cuCompany[0].duties);
  };
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <Company jobs={jobs} current={current} changeCurrent={changeCurrent} />
        <Info current={current} duties={duties} />
      </div>
    </section>
  );
}

export default App;
