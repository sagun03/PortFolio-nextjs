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
    <div className="bg-primary border p-3 m-1 b-2 border-gray-700 rounded-lg overflow-hidden shadow-lg max-w-project">
      <a
        href={live}
        className="text-white bg-primary border-gray-700 justify-center rounded-lg shadow-md mb-6 rounded "
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={img} alt="Project" className="w-full h-44 rounded-lg transform transition-transform duration-300 hover:scale-105" />
      </a>
      <div className="p-6 h-44 flex justify-between flex-col">
        <h3 className="text-xl font-semibold mb-1 text-white">{name}</h3>
        {/* <p className="text-gray-400 mb-4">{desc}</p> */}
        <p className="py-2">
          Tech Stack:{" "}
          {tech.map((t, index) => (tech.length - 1 === index ? t : t + ", "))}
        </p>
        <div className="flex justify-center gap-10">
          <a href={live} target="_blank" rel="noopener noreferrer">
            <button className="bg-secondary text-white py-2 px-4 rounded hover:bg-secondary-dark transition-all duration-300">
              View Live
            </button>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button className="bg-secondary text-white py-2 px-4 rounded hover:bg-secondary-dark transition-all duration-300">
              View Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
