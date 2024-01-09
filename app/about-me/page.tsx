import IntroSection from "./components/IntroSection";
import Experience from "./components/Experience";

const AboutMe = () => {
  return (
    <main className="flex h-full flex-col mt-2 mb-2 bg-gray-900 rounded-lg shadow-md   text-white ">
      <div className="max-h-about-me-scroll flex-wrap overflow-y-auto overscroll-auto">
        <IntroSection />
        <Experience />
      </div>
    </main>
  );
};

export default AboutMe;
