function Company({ jobs, current, changeCurrent }) {
  return (
    <div className="jobs-center">
      <div className="btn-container">
        {jobs.map((job) => (
          <button
            onClick={() => changeCurrent(job.id)}
            key={job.id}
            className={`job-btn ${
              current.company === job.company ? "active-btn" : "false"
            }`}
          >
            {job.company}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Company;
