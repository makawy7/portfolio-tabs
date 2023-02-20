import { FaAngleDoubleRight } from "react-icons/fa";

function Info({ title, company, dates, duties }) {
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date">{dates}</p>
      {duties.map((el, idx) => (
        <div key={idx} className="job-desc">
          <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
          <p>{el}</p>
        </div>
      ))}
    </article>
  );
}

export default Info;
