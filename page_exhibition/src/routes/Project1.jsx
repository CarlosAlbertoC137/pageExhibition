// img
import formImg from "../img/form-img.png";
// css
import "./Projects.css";

const Project1 = () => {
  return (
    <div className="project-container">
      <a href="https://github.com/CarlosAlbertoC137/form">
        <img src={formImg} alt="imagem do formulário" />
      </a>
      <h4>Formulário</h4>
      <p>Formulário para venda de carros feito em HTML e CSS</p>
    </div>
  );
};

export default Project1;
