import React from "react";
import { projects } from "./consts";
import ProjectCard from "./components/ProjectCard";
const Projects = () => {
  return (
    <main className="container mx-auto px-8 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="flex">
        {projects.map(({ name, live, github, tech, desc, img }) => (
          <ProjectCard
            key={name}
            name={name}
            live={live}
            github={github}
            tech={tech}
            desc={desc}
            img={img}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
