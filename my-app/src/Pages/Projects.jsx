// src/pages/Projects.jsx
import React from "react";
import ProjectCard from "../Component/Projectcard";

const projects = [
  {
    title: "E-commerce Website",
    description: "React + Tailwind CSS + Node.js + MongoDB",
    link: "https://github.com/sridevidurga/Ecommerce",
  },
  {
    title: "Axess-Website",
    description: "React + Tailwind CSS + Vite",
    link: "https://github.com/sridevidurga/Axess-Website",
  },
  {
    title: "Blog",
    description: "React + Tailwind CSS + MangoDb",
    link: "https://github.com/sridevidurga/Blogwebsite",
  },

  {
    title:"Weather-App",
    description:"React + Tailwind CSS + Vite",
    link:"https://github.com/sridevidurga/WeatherApp"

  }
];

const Projects = () => {
  return (
    <div className="py-20 px-6 md:px-20 bg-white">
      <h1 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">Projects</h1>
      <div className="grid md:grid-cols-3 gap-8 cursor-pointer">
        {projects.map((proj) => (
          <div key={proj.id} className="bg-purple-900 p-6 rounded-xl hover:scale-105 transition transform shadow-2xl" data-aos="zoom-in">
            <h2 className="text-2xl font-bold mb-2 text-amber-50">{proj.title}</h2>
            <p className="mb-4">{proj.desc}</p>
            <a href={proj.link} className="text-yellow-400 font-semibold hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

