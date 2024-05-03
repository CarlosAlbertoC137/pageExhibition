// image
import Photo from "../img/photo.jpeg";
import reactLogo from "../img/react-logo.png";

// css
import "./Body.css";

const Body = () => {
  return (
    <div>
      <header>
        <h2 id="home">Seja bem-vindo ao meu portifólio</h2>
        <p>
          Aqui você vai conhecer um pouco mais sobre mim e minhas habilidades
          como desenvolvimento web
        </p>
      </header>
      <div className="body" id="body">
        <img src={Photo} alt="foto de Carlos" id="personal-photo" />
        <p>
          Olá, meu nome é Carlos. Sou um desenvolvedor Web/Front-end no inico da
          minha jornada de programação. Iniciei meus estudos no ano de 2023,
          desde então venho evoluindo meus conhecimentos e habilidades no
          desenvolvimento web.
        </p>

        <p>
          Meus conhecimentos e habilidades consistem nas seguintes tecnologias:
        </p>
        <div className="logo-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            alt="HTML Logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg"
            alt="CSS Logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/JavaScript_unofficial_logo.svg"
            alt="JS Logo"
          />
          <img src={reactLogo} alt="React Logo" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
            alt="TS Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
