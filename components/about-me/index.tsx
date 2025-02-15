"use client";
import IntroSection from "./components/IntroSection";
import Experience from "./components/Experience";
import FadeEffectWrapper from "./components/FadeEffectWrapper";
import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "../common/Accordion";

const AboutMe = () => {
  const [expanded, setExpanded] = useState<string[]>(["panel1", "panel2"]);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    if (!newExpanded) {
      const otherPanel = panel === "panel1" ? "panel2" : "panel1";
      setExpanded((prevExpanded) => {
        const newExpandedState = prevExpanded.filter((item) => item !== panel);
        if (!newExpandedState.includes(otherPanel)) {
          newExpandedState.push(otherPanel);
        }
        return newExpandedState;
      });
    } else {
      setExpanded((prevExpanded) => {
        if (!prevExpanded.includes(panel)) {
          return [...prevExpanded, panel];
        }
        return prevExpanded;
      });
    }
  };

  return (
    <main className="flex sm:h-full bg-primary flex-col mt-2 mb-2 sm:bg-gray-900  rounded-lg shadow-md text-white">
      <div className="hidden sm:block text-2xl mb-1 px-8 pt-8 pb-4 font-semibold text-center">
        <FadeEffectWrapper
        duration={600}
          text={`👋 Hey there! I'm Sagun Saluja, a passionate Software Developer based in Mississauga, Ontario.
`}
        />
      </div>
      <FadeEffectWrapper duration={800}>
        <section className="sm:px-8 rounded-lg flex gap-4 flex-col	">
          <Accordion
            expanded={expanded.includes("panel1")}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <h2 className="text-xl font-semibold">Introduction</h2>
            </AccordionSummary>
            <AccordionDetails className="bg-gray-900 mx-6  rounded-lg shadow-md sm:bg-inherit sm:mx-0 px-2 sm:px-6">
              <FadeEffectWrapper duration={1000}>
                <section className="bg-gray-900 sm:h-auto  rounded-lg shadow-md py-6">
                  <IntroSection />
                </section>
              </FadeEffectWrapper>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded.includes( "panel2")}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <h2 className="text-xl font-semibold">Professional Experience</h2>
            </AccordionSummary>
            <AccordionDetails className="bg-gray-900 mx-6  rounded-lg shadow-md sm:bg-inherit sm:mx-0 px-2 sm:px-6">
              <FadeEffectWrapper duration={1000}>
                <section className="bg-gray-900 rounded-lg sm:h-full shadow-md py-6">
                  <Experience />
                </section>
              </FadeEffectWrapper>
            </AccordionDetails>
          </Accordion>
        </section>
      </FadeEffectWrapper>
    </main>
  );
};

export default AboutMe;
