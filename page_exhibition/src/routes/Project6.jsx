// img
import githublogo from "../img/github-logo.png";
import codepenlogo from "../img/codepen-logo.png";
// css
import "./Project6.css";
const Project6 = () => {
  return (
    <div>
      <h3 className="look-more">Para ver mais projetos acesse:</h3>
      <div className="more-projects">
        <a href="https://github.com/CarlosAlbertoC137">
          <img src={githublogo} alt="github logo" />
        </a>
        <p>OU</p>
        <a href="https://codepen.io/CarlosC137">
          <img src={codepenlogo} alt="codepen logo" />
        </a>
      </div>
    </div>
  );
};

export default Project6;
