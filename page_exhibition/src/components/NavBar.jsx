// css
import "./NavBar.css";

// Links
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <a href="#home" className="home">
          Home
        </a>
        <ul>
          <li>
            <a href="#body">Sobre</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
