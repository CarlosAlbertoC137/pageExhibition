// img
import imcCalculatorImg from "../img/imcCalculator-img.png";
// css
import "./Projects.css";

const Project3 = () => {
  return (
    <div className="project-container">
      <a href="https://github.com/CarlosAlbertoC137/calculatorimc">
        <img src={imcCalculatorImg} alt="" />
      </a>
      <h4>Calculadora de IMC</h4>
      <p>Calculadora de IMC feita em HTMLL, CSS e React.js.</p>
    </div>
  );
};

export default Project3;
