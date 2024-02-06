import React, { useState } from "react";
import FadeEffectWrapper from "../about-me/components/FadeEffectWrapper";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "../common/Acordian";
import SkillCard from "./components/SkillCard";
import { skillsData } from "./components/const";

export default function Skills() {
  const [expanded, setExpanded] = useState<number[]>([0]);

  const handleChange = (panel: number) => (
    event: React.SyntheticEvent,
    newExpanded: boolean
  ) => {
    if (!newExpanded && expanded.includes(panel) && expanded.length === 1) {
      const secondAccordionIndex = (panel + 1) % skillsData.length;
      setExpanded([secondAccordionIndex]);
    } else {
      setExpanded((prevExpanded) =>
        newExpanded ? [...prevExpanded, panel] : prevExpanded.filter((item) => item !== panel)
      );
    }
  };

  return (
    <div className="container h-full mx-auto px-8 bg-gray-900 p-6 rounded-lg shadow-md text-white">
      <h2 className="text-3xl flex justify-center mb-4">
        <FadeEffectWrapper text={`Technologies and Skills`} />
      </h2>
      <p className="font-light flex justify-center">
        <FadeEffectWrapper text={`Skillscape 🌟: The Artillery of Expertise 🚀`} />
      </p>
      <div className="flex gap-4 max-h-skills-scroll mt-8 pb-4 flex-wrap overflow-y-auto overscroll-auto">
        {skillsData.map((category, index) => (
          <div key={index} className="mb-2 mt-6">
            <Accordion
              expanded={expanded.includes(index)}
              onChange={handleChange(index)}
            >
              <AccordionSummary
                aria-controls={`panel${index + 1}d-content`}
                id={`panel${index + 1}d-header`}
              >
                <FadeEffectWrapper duration={300}>
                  <h2 className="text-xl  font-semibold">{category.emoji} {category.category}</h2>
                </FadeEffectWrapper>
              </AccordionSummary>
              <AccordionDetails>
                <FadeEffectWrapper duration={500}>
                  <div className="flex gap-5 flex-wrap">
                    <SkillCard skills={category.skills} />
                  </div>
                </FadeEffectWrapper>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}
