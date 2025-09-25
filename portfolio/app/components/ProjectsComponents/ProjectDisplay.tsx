import React, { FC, useState } from "react";
import Image from "next/image";
import { Project } from "@/app/types/project";

interface ProjectDisplayProps {
  project?: Project;
  navigateProject: (direction: "next" | "previous") => void;
}

interface ArrowButtonProps {
  symbol: string;
  onClick: () => void;
}

const ProjectDisplay: FC<ProjectDisplayProps> = ({
  project,
  navigateProject,
}) => {
  if (!project) {
    return <p>No project found</p>;
  }

  const ArrowButton: FC<ArrowButtonProps> = ({ symbol, onClick }) => (
    <div className="text-4xl lg:text-5xl flex-shrink-0 flex items-center justify-center">
      <button className="cursor-pointer" onClick={onClick}>
        {symbol}
      </button>
    </div>
  );

  return (
    <div className="flex justify-center w-full relative">
      <ArrowButton symbol="<" onClick={() => navigateProject("previous")} />
      <Image
        src={project.images.desktop}
        alt="Image of a ecommerce landing page in desktop view"
        width={800}
        height={400}
        className="flex-shrink min-w-0 pr-2 pl-2"
      />
      <ArrowButton symbol=">" onClick={() => navigateProject("next")} />
      <Image
        src={project.images.mobile}
        alt="Image of a ecommerce landing page in desktop view"
        width={200}
        height={400}
        className="absolute h-1/2 w-1/6 bg-black -bottom-10 right-10 border rotate-6 max-w-[250px] object-cover"
      ></Image>
    </div>
  );
};

export default ProjectDisplay;
