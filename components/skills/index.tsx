"use client"
import React, { useState, useRef } from "react";
import FadeEffectWrapper from "../about-me/components/FadeEffectWrapper";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "../common/Accordion";
import SkillCard from "./components/SkillCard";
import { skillsData } from "./components/const";

const Skills = () =>  {
  const [expanded, setExpanded] = useState<number[]>(skillsData.map((_, index) => index)); 
  const accordionRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    if (isExpanded) {
      // If expanding, add the panel to the expanded array
      setExpanded((prevExpanded) => [...prevExpanded, panel]);
    } else {
      // If collapsing, remove the panel from the expanded array
      setExpanded((prevExpanded) => prevExpanded.filter((item) => item !== panel));
    }

    // If all panels are collapsed, open the first one
    if (!isExpanded && expanded.length === 1) {
      setExpanded([expanded[0] === 0 ? 1 : 0]);
    }

    // Automatically scroll to the expanded panel
    if (accordionRef.current && isExpanded) {
      accordionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="container h-full mx-auto px-8 bg-gray-900 p-6 rounded-lg shadow-md text-white">
      <h2 className="text-3xl font-semibold	 flex justify-center mb-4">
        <FadeEffectWrapper text={`Technologies and Skills`} />
      </h2>
      <p className="text-tag-line flex justify-center">
        <FadeEffectWrapper
          text={`Skillscape 🌟: The Artillery of Expertise 🚀`}
        />
      </p>
      <div className="flex max-h-skills-scroll mt-8 gap-4 flex-wrap">
        {skillsData.map((category, index) => (
          <div key={index} className="w-skills-container" ref={index === expanded[expanded.length - 1] ? accordionRef : null}>
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
                    <div className="flex gap-5 flex-wrap pb-6 pt-4 justify-center">
                      <SkillCard skills={category.skills} />
                    </div>
                  </FadeEffectWrapper>
                </AccordionDetails>
              </Accordion>
            </FadeEffectWrapper>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
