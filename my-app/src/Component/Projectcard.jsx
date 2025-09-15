import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-4 max-w-sm transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
      data-aos="fade-up"
    >
      <img src={project.image} alt={project.title} className="rounded-md mb-4" />
      <h2 className="text-xl font-bold mb-2">{project.title}</h2>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <a href={project.link} target="_blank" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
