"use client"
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import IntroSection from "./components/IntroSection";
import Experience from "./components/Experience";
import TypingParagraph from "./components/TypingParagraph";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  marginBottom: '12px',
  borderRadius: '10px', // Rounded corners
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  backgroundColor: '#0F1117',
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: 'white' }} />}
    {...props}
  />
))(({ theme }) => ({
  color: 'white',
  // backgroundColor:
  //   theme.palette.mode === 'dark'
  //     ? 'rgba(255, 255, 255, .05)'
  //     : 'rgba(0, 0, 0, .03)',
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails: any = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingRight: theme.spacing(4),
  paddingLeft: theme.spacing(4),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  color: 'white',
  overflowY: 'auto', 
  maxHeight: '60vh', 
}));

const AboutMe = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(() => {
       if (!newExpanded) {
          return panel === 'panel1' ? 'panel2' : 'panel1';
        } else {
          return panel;
        }
      });
    };

  return (
    <main className="flex h-full flex-col mt-2 mb-2 bg-gray-900 rounded-lg shadow-md text-white">
      <TypingParagraph />{" "}
      <section className="px-8 rounded-lg">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <h2 className="text-xl font-semibold">Introduction</h2>
        </AccordionSummary>
        <AccordionDetails>
          <IntroSection />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <h2 className="text-xl font-semibold">Professional Experience</h2>
        </AccordionSummary>
        <AccordionDetails>
          <section className="bg-gray-900 rounded-lg shadow-md py-6">
          <Experience />
          </section>
        </AccordionDetails>
      </Accordion>
      </section>
    </main>
  );
};

export default AboutMe;
