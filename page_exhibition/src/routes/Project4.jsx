// img
import blogreactaxiosImg from "../img/blogreactaxios-img.png";
// css
import "./Projects.css";

const Project4 = () => {
  return (
    <div className="project-container">
      <a href="https://github.com/CarlosAlbertoC137/blogcomaxios">
        <img src={blogreactaxiosImg} alt="" />
      </a>
      <h4>Blog</h4>
      <p>
        Blog feito com HTML, CSS, React.js e com requisisões HTTP em api fake.
      </p>
    </div>
  );
};

export default Project4;
