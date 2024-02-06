import React from "react";
import Rating from "./StarRating";

const SkillCard = ({ skill }: { skill: any }) => {
  return (
    <div className="bg-primary border border-gray-700 p-4 text-white justify-center rounded-lg shadow-md max-w-min">
      <div className="flex items-center text-center justify-center mb-4">
        <div className="flex items-center justify-center">
          {skill.iconUrl && (
            <img
              src={skill.iconUrl}
              alt={skill.name}
              className={`w-8 h-8 mr-2 rounded-full`}
            />
          )}
          <h3 className={`text-white text-xl mr-2 ${!skill.iconUrl ? skill.animate : ''}`}>{skill.name}</h3>

          {/* {skill.iconUrl && (
            <img
              src={skill.iconUrl}
              alt={skill.name}
              className={`w-8 h-8 mr-2 rounded-full ${skill.animate}`}
            />
          )} */}
        </div>
      </div>
      <p className="text-sm text-gray-400 font-light text-center mb-2">{skill.desc}</p>
      <Rating rating={skill.rating} className="justify-center flex" />
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
