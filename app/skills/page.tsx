import Image from "next/image";
import SkillCard from "./components/SkillCard";
import { skillsData } from "./components/const";

export default function Skills() {
  return (
    <div className="container h-full mx-auto  px-8 bg-gray-900 p-6 rounded-lg shadow-md text-white">
      <h2 className="text-3xl flex justify-center  mb-4">
        Technologies and Skills
      </h2>
      <p className="font-light flex justify-center">
        Skillscape 🌟: The Artillery of Expertise 🚀
      </p>
      <div className="flex gap-4 max-h-skills-scroll mt-8 pb-4 flex-wrap overflow-y-auto overscroll-auto">
        {skillsData.map((category, index) => (
          <div key={index} className="mb-2 mt-6">
            <h3 className="text-xl flex mb-6">
              {category.emoji} {category.category}
            </h3>
            <div className="flex gap-5 flex-wrap">
              <SkillCard skills={category.skills} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
