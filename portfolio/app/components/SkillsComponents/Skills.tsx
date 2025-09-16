import React from "react";
import SkillsHead from "./SkillsHead";
import Title from "../Title";
import ContentContainer from "../ContentContainer";

const Skills = () => {
  return (
    <ContentContainer backgroundColour="sand">
      <div className="w-full flex flex-col-reverse justify-center gap-8 lg:grid grid-cols-4">
        <div className="flex items-center justify-center w-full col-span-2 col-start-2 ">
          <SkillsHead />
        </div>
        <div>
          <Title>Skills</Title>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Skills;
