import Company from "./Company";
import Info from "./Info";
import { useCallback, useEffect, useState } from "react";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    console.log("fetch call");
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const changeCurrent = (index) => {
    setCurrent(index);
  };

  if (loading) {
    return (
      <section className="section loading">
        <h1>loading ...</h1>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <Company jobs={jobs} current={current} changeCurrent={changeCurrent} />
        <Info {...jobs[current]} />
      </div>
    </section>
  );
}

export default App;
