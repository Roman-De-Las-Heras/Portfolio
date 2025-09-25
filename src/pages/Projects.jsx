import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.json";
import TechIcons from "../components/TechIcons";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <TechIcons />
      </div>
      <h1 className="text-3xl font-bold mb-6">Mis proyectos:</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
