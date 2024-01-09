import IntroSection from "./components/IntroSection";
import Experience from "./components/Experience";

const AboutMe = () => {
  return (
    <main className="flex flex-col items-center justify-center text-white ">
      <div className="h-about-me-scroll flex-wrap overflow-y-auto overscroll-auto">
        <IntroSection />
        <Experience />
      </div>
    </main>
  );
};

export default AboutMe;
