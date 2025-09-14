import React, { FC, ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

interface ParagraphProps {
  children: ReactNode;
}

const Paragraph: FC<ParagraphProps> = ({ children }) => {
  return <p className="text-2xl">{children}</p>;
};

export default Paragraph;
