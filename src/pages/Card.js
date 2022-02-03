import * as FaIcons from "react-icons/fa";
const Card = ({
  handlePointerEvent,
  title,
  img,
  skills,
  github,
  deployed,
  summary,
  cardStyle,
}) => {
  return (
    <article className={cardStyle} id="article">
      <div
        className="card"
        onMouseDown={handlePointerEvent}
        onTouchStart={handlePointerEvent}
      >
        <img src={img} alt="project img" />
        <div className="projectItem__info">
          <h3 className="title">{title}</h3>
          <p className="skills">{skills}</p>
          <p className="summary">{summary}</p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "2rem",
            }}
          >
            <a href={github} target="blank">
              <button className="bn30">View Code</button>
            </a>
            <a href={deployed} target="blank">
              <button className="bn30">Live App</button>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
