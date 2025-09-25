import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
    <img
      src={project.image}
      alt={project.name}
      className="rounded-lg mb-3 w-full"
      style={{ backgroundColor: project.imageBg || "transparent" }}
    />
    <h2 className="text-xl font-bold">{project.name}</h2>
    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
    <div className="flex flex-wrap gap-2 mt-2">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
        >
          #{tag}
        </span>
      ))}
    </div>
    <div className="flex gap-4 mt-4">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-blue-500"
      >
        <Github size={18} /> Code
      </a>
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-green-500"
      >
        <ExternalLink size={18} /> Demo
      </a>
    </div>
  </div>
);

export default ProjectCard;
