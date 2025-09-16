"use client";
import React, { FC, ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface HighlightProps {
  children: ReactNode;
}

const Highlight: FC<HighlightProps> = ({ children }) => {
  const highlightRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    animateHighlight();
  }, []);

  const animateHighlight = () => {
    gsap.from(highlightRef.current, {
      width: 0,
      duration: 3,
      display: "inline-block",
    });
    ``;
  };
  return (
    <span className="relative">
      <span className="relative z-10">{children}</span>
      <span
        className="absolute bg-primary-yellow w-full h-full top-0 left-0"
        ref={highlightRef}
      ></span>
    </span>
  );
};

export default Highlight;
