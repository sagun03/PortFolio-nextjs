"use client";
import { useRouter } from "next/navigation";
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
  let router = useRouter();

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 relative">
      <img
        src={img}
        alt="Project 1"
        className="w-full h-52 object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{name}</h3>
        <p className="text-gray-400 mb-4">{desc}</p>
        <p>
          Github:{" "}
          <a
            href={github}
            className="text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit repo
          </a>
        </p>
        <p className="py-2">
          Tech Stack:{" "}
          {tech.map((t, index) => (tech.length - 1 === index ? t : t + ", "))}
        </p>
        <a href={live} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300">
            View Live
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
