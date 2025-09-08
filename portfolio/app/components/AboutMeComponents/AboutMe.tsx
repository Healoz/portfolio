import React from "react";
import Title from "../Title";
import Paragraph from "../Paragraph";
import Highlight from "../Highlight";

const AboutMe = () => {
  return (
    <div className="w-full flex bg-sand p-10 items-center">
      <div className="md:w-1/2 flex flex-col gap-10 max-w-2xl">
        <Title>About me</Title>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
          veritatis magnam vitae id, <Highlight>test</Highlight> iste totam
          fugit natus veniam. Ea ab eum, similique reprehenderit officiis
          facilis voluptas in nam ratione ut rem deleniti commodi quasi! Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Quod veritatis
          magnam vitae id, iste totam fugit natus veniam. Ea ab eum, similique
          reprehenderit officiis facilis voluptas in nam ratione ut rem deleniti
          commodi quasi!
        </Paragraph>
      </div>
      <div className="flex-1 items-end justify-end">
        <img
          src={`/HeadPlaceholder.png`}
          className="h-full w-full object-contain "
        />
      </div>
    </div>
  );
};

export default AboutMe;
