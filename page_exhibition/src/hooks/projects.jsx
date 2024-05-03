import { useState } from "react";

export function projects(step) {
  const [currentProject, setCurrentProject] = useState(0);

  function changeProject(i) {
    if (i < 0 || i >= step.length) return;

    setCurrentProject(i);
  }

  return {
    currentProject,
    currentComponent: step[currentProject],
    changeProject,
  };
}
