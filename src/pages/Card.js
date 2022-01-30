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
    <article className={cardStyle}>
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

          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href={github} target="blank">
              <button class="bn30">View Code</button>
            </a>
            <a href={deployed} target="blank">
              <button class="bn30">Live App</button>
            </a>
            {/* <a href={github} target="blank" className="github"> */}
            {/* <FaIcons.FaGithubSquare size={50} color="#000" /> */}
            {/* </a> */}
            {/* <a href={deployed} className="projectItem__deployed" target="blank"> */}
            {/* <FaIcons.FaExternalLinkSquareAlt size={50} color="#000" /> */}
            {/* </a> */}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
