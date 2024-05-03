// css
import "./App.css";

// icons
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// components
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Contact from "./components/Contact";

// hook
import { projects } from "./hooks/projects";

// routes
import Project0 from "./routes/Project0";
import Project1 from "./routes/Project1";
import Project2 from "./routes/Project2";
import Project3 from "./routes/Project3";
import Project4 from "./routes/Project4";
import Project5 from "./routes/Project5";
import Project6 from "./routes/Project6";

function App() {
  const projectsComponents = [
    <Project0 />,
    <Project1 />,
    <Project2 />,
    <Project3 />,
    <Project4 />,
    <Project5 />,
    <Project6 />,
  ];

  const { currentProject, currentComponent, changeProject } =
    projects(projectsComponents);
  return (
    <div className="app">
      <NavBar />
      <Body />
      <hr />
      <div className="projects-container">
        <h2 id="projects">Confira abaixo alguns dos meus projetos</h2>
        <div className="projects">{currentComponent}</div>
        <button type="button" onClick={() => changeProject(currentProject - 1)}>
          <GrFormPrevious />
          Voltar
        </button>
        <button type="button" onClick={() => changeProject(currentProject + 1)}>
          Avançar
          <GrFormNext />
        </button>
      </div>
      <hr id="contact" />
      <Contact />
    </div>
  );
}

export default App;
