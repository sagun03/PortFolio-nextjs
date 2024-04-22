"use client"
import React, { useRef, useState } from "react";
import { projects } from "./components/consts";
import ProjectCard from "./components/ProjectCard";
import FadeEffectWrapper from "../about-me/components/FadeEffectWrapper";
import { Accordion, AccordionDetails, AccordionSummary } from "../common/Accordion";
const Projects = () => {
  const [expanded, setExpanded] = useState<number[]>(projects.map((_, index) => index)); 
  const accordionRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (panel: number) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    if (isExpanded) {
      setExpanded((prevExpanded) => [...prevExpanded, panel]); // Expand the clicked panel
    } else {
      if (expanded.length > 1) {
        setExpanded((prevExpanded) => prevExpanded.filter((item) => item !== panel)); // Collapse the clicked panel if more than one expanded
      }
    }

    if (accordionRef.current && isExpanded) {
      accordionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <main className="container h-full mx-auto px-8 bg-gray-900 p-6 rounded-lg shadow-md text-white">
      <h2 className="text-3xl flex justify-center font-semibold mb-4">
        {" "}
        <FadeEffectWrapper text={`Projects`} />
      </h2>
      <div className=" sm:flex gap-4 mt-8 max-h-section-scroll flex-wrap overflow-y-auto overscroll-auto scroll-py-1">
        {projects.map((category, index) => (
          <div key={index} className="mb-2 mt-6">
            <FadeEffectWrapper duration={300}>
              <Accordion
                expanded={expanded.includes(index)}
                onChange={handleChange(index)}
              >
                <AccordionSummary
                  aria-controls={`panel${index + 1}d-content`}
                  id={`panel${index + 1}d-header`}
                >
                  <h2 className="text-xl font-medium">
                    {category.emoji} {category.category}
                  </h2>
                </AccordionSummary>

                <AccordionDetails>
                  <FadeEffectWrapper duration={500}>
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
                  </FadeEffectWrapper>
                </AccordionDetails>
              </Accordion>
            </FadeEffectWrapper>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
