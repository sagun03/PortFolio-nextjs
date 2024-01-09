import React from "react";
import { projects } from "./components/consts";
import ProjectCard from "./components/ProjectCard";
const Projects = () => {
  return (
    <main className="container mx-auto px-8 bg-gray-900 p-6 rounded-lg shadow-md text-white">
      <h2 className="text-3xl flex justify-center  mb-4">Projects</h2>
      <div className="flex gap-4 h-section-scroll flex-wrap overflow-y-auto overscroll-auto scroll-py-1">
        {projects.map((category, index) => (
          <div key={index} className="mb-2 mt-6">
            <h3 className="text-xl flex mb-6">
              {category.emoji} {category.category}
            </h3>
            <div className="flex gap-5 flex-wrap">
              {category.projects.map(
                ({ name, live, github, tech, desc, img }) => (
                  <ProjectCard
                    key={name}
                    name={name}
                    live={live}
                    github={github}
                    tech={tech}
                    desc={desc}
                    img={img}
                  />
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
