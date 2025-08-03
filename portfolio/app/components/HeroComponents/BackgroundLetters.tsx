import React, { FC, useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import { gsap } from "gsap";

interface BackgroundLettersProps {
  xOffset: number;
  colour: string;
}

const BackgroundLetters: FC<BackgroundLettersProps> = ({ xOffset, colour }) => {
  const letters = ["L", "A", "U", "R", "E", "N", "E", "A", "S", "T", "E", "R"];

  const timeline = gsap.timeline({
    defaults: { duration: 0.5, ease: "back.out(1)" },
  });

  // play animation on instantiation
  useEffect(() => {
    timeline.fromTo(
      ".letter-svg",
      {
        y: "-100%",
      },
      { y: 0, stagger: 0.2 }
    );
  }, []);

  const lettersElements = letters.map((letter, index) => (
    <div
      className={`overflow-hidden flex-1 translate-x-${xOffset}`}
      key={index}
    >
      <div className="flex-1 h-full letter-svg ">
        <ReactSVG
          src={`/nameLetters/${letter}.svg`}
          className="h-full relative"
          wrapper="span"
          beforeInjection={(svg) => {
            svg.style.width = "100%";
            svg.style.height = "100%";
            svg.setAttribute("preserveAspectRatio", "none");

            const path = svg.querySelector("path");
            if (path) {
              path.setAttribute("fill", colour);
              path.setAttribute("stroke", "#fffbe8");
            }
          }}
        />
      </div>
    </div>
  ));

  return (
    <div id="background-letters" className="w-full h-[80%] absolute z-1 flex">
      <div className="flex w-full h-full letters-container">
        {lettersElements}
      </div>
    </div>
  );
};

export default BackgroundLetters;
