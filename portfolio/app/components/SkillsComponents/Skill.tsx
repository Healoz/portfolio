import React, { FC, ReactNode } from "react";
import Image from "next/image";

interface SkillProps {
  bgColour: string;
  iconName: string;
  iconAlt: string;
}

const Skill: FC<SkillProps> = ({ bgColour, iconName, iconAlt }) => {
  return (
    <div
      className={`bg-${bgColour} aspect-square rounded-full w-full flex justify-center items-center border`}
    >
      <Image
        src={`/icons/${iconName}.svg`}
        alt={iconAlt}
        width={24}
        height={24}
        className="w-10 h-10"
      />
    </div>
  );
};

export default Skill;
