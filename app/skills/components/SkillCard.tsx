import React from "react";
import Rating from "@/app/components/StarRating";

const SkillCard = ({ skill }: { skill: any }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src={skill.iconUrl}
            alt={skill.name}
            className="w-8 h-8 mr-4"
          />
          <h3 className="text-white text-lg">{skill.name}</h3>
        </div>
        <p className="text-gray-400">{skill.category}</p>
      </div>
      <Rating rating={skill.rating} />
    </div>
  );
};

const SkillsComponent = ({ skills }: { skills: any }) => {
  return (
    <>
      {skills?.map((skill: any, index: number) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </>
  );
};

export default SkillsComponent;
