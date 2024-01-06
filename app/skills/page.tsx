import Image from "next/image";
import SkillCard from "./components/SkillCard";
import { skillsData } from "./components/const";

export default function Skills() {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white">
      <h2 className="text-3xl font-semibold mb-4">Technologies and Skills</h2>
      <p>Skillscape 🌟: The Artillery of Expertise 🚀</p>
      {skillsData.map((category, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl flex items-center font-semibold mb-2">{category.category}</h3>
          <div className="flex gap-6 flex-wrap">
          <SkillCard skills={category.skills} />
          </div>
        </div>
      ))}
    </div>
  );
}
