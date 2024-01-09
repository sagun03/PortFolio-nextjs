import React from "react";

interface IProjectCar {
  name: string;
  github: string;
  live: string;
  tech: string[];
  desc: string;
  img: string;
}

const ProjectCard = ({ name, live, github, tech, desc, img }: IProjectCar) => {

  return (
    <a
      href={live}
      className="text-white py-2 px-4 rounded"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-gradient-to-b h-96 from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 relative">
        <img src={img} alt="Project 1" className="w-full h-52" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1 text-white">{name}</h3>
          {/* <p className="text-gray-400 mb-4">{desc}</p> */}
          <p className="py-2">
            Tech Stack:{" "}
            {tech.map((t, index) => (tech.length - 1 === index ? t : t + ", "))}
          </p>
          <div className="flex justify-center gap-2">
          <a href={live} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300">
              View Live
            </button>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300">
              View Github
            </button>
          </a>
            </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
