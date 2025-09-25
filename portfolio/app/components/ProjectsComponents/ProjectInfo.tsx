import React, { FC, useState } from "react";
import Image from "next/image";
import Button from "../Button";
import { Project } from "@/app/types/project";

interface ProjectInfoProps {
  project?: Project;
}

const ProjectInfo: FC<ProjectInfoProps> = ({ project }) => {
  if (!project) {
    return <p>No project found</p>;
  }

  const technologoies = project.technologies.map((technology, index) => (
    <p className="bg-primary-yellow p-2" key={index}>
      {technology}
    </p>
  ));

  return (
    <article className="flex flex-col gap-5">
      <h3 className="text-2xl font-semibold">{project.title}</h3>
      <div className="flex gap-3 flex-wrap">{technologoies}</div>
      <p>{project.description}</p>
      <Button colour="primary-blue">View</Button>
    </article>
  );
};

export default ProjectInfo;
