import React, { useState, useRef, useEffect } from "react";
import FadeEffectWrapper from "../about-me/components/FadeEffectWrapper";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "../common/Acordian"; // Corrected import path
import SkillCard from "./components/SkillCard";
import { skillsData } from "./components/const";

export default function Skills() {
  const [expanded, setExpanded] = useState<number[]>([0]);
  const accordionRef = useRef<HTMLDivElement | null>(null); 

  const handleChange = (panel: number) => (
    event: React.SyntheticEvent,
    newExpanded: boolean
  ) => {
    if (!newExpanded && expanded.includes(panel) && expanded.length === 1) {
      const secondAccordionIndex = (panel + 1) % skillsData.length;
      setExpanded([secondAccordionIndex]);
    } else {
      setExpanded((prevExpanded) =>
        newExpanded
          ? [...prevExpanded, panel]
          : prevExpanded.filter((item) => item !== panel)
      );
    }
  };
  useEffect(() => {
    accordionRef.current?.focus();
  }, [expanded]);
  return (
    <div className="container h-full mx-auto px-8 bg-gray-900 p-6 rounded-lg shadow-md text-white">
      <h2 className="text-3xl flex justify-center mb-4">
        <FadeEffectWrapper text={`Technologies and Skills`} />
      </h2>
      <p className="text-tag-line flex justify-center">
        <FadeEffectWrapper
          text={`Skillscape 🌟: The Artillery of Expertise 🚀`}
        />
      </p>
      <div className="flex max-h-skills-scroll mt-8 flex gap-4 flex-wrap overflow-y-auto overscroll-auto">
        {skillsData.map((category, index) => (
          <div key={index} className="w-skills-container" ref={accordionRef}>
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
