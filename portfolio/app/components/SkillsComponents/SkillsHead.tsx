import React from "react";
import Skill from "./Skill";

const SkillsHead = () => {
  const skill = (
    <div className="bg-red-500 aspect-square rounded-full w-full">skill</div>
  );
  return (
    <div className="border aspect-square max-w-2xl w-full relative">
      <img
        src={`/YellowHead.png`}
        className="aspect-square object-contain absolute"
      ></img>
      <div className="bg-sand absolute w-3/5 h-3/9 top-27 left-11/24 -translate-x-1/2 -rotate-45 rounded-full overflow-hidden grid grid-rows-2 grid-cols-4">
        <Skill
          bgColour="primary-orange"
          iconName="akar-icons_html-fill"
          iconAlt="HTML logo"
        />
        <Skill
          bgColour="primary-orange"
          iconName="material-symbols_css"
          iconAlt="CSS logo"
        />
      </div>
    </div>
  );
};

export default SkillsHead;
