// img
import blogImg from "../img/blog-img.png";
// css
import "./Projects.css";
const Project0 = () => {
  return (
    <div className="project-container">
      <a href="https://github.com/CarlosAlbertoC137/blog">
        <img src={blogImg} alt="blog image" />
      </a>
      <h4>Blog</h4>
      <p>Blog simples feito em HTML e CSS</p>
    </div>
  );
};

export default Project0;
