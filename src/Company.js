function Company({ jobs, current, changeCurrent }) {
  return (
    <div className="jobs-center">
      <div className="btn-container">
        {jobs.map((job, idx) => (
          <button
            onClick={() => changeCurrent(idx)}
            key={job.id}
            className={`job-btn ${current === idx ? "active-btn" : "false"}`}
          >
            {job.company}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Company;
