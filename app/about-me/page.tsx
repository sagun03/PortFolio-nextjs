import IntroSection from "./components/IntroSection";
import Experience from "./components/Experience";

const AboutMe = () => {
  return (
    <main className="flex flex-col items-center justify-center text-white ">
      <IntroSection />
      <Experience />
    </main>
  );
};

export default AboutMe;
