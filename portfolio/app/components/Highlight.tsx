"use client";
import React, { FC, ReactNode, useEffect } from "react";
import { gsap } from "gsap";

interface HighlightProps {
  children: ReactNode;
}

const Highlight: FC<HighlightProps> = ({ children }) => {
  useEffect(() => {
    animateHighlight();
  }, []);

  const animateHighlight = () => {
    gsap.from(".highlight", {
      width: 0,
      duration: 3,
      display: "inline-block",
    });
  };
  return (
    <span className="relative">
      <span className="relative z-10">{children}</span>
      <span className="absolute bg-primary-yellow w-full h-full top-0 left-0 highlight"></span>
    </span>
  );
};

export default Highlight;
