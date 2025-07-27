import React, { FC, useEffect } from "react";
import { ReactSVG } from "react-svg";

interface BackgroundLettersProps {
  shouldPlay: boolean;
}

const BackgroundLetters: FC<BackgroundLettersProps> = ({ shouldPlay }) => {
  const letters = ["L", "A", "U", "R", "E", "N", "E", "A", "S", "T", "E", "R"];

  useEffect(() => {
    if (shouldPlay) {
      console.log("play animation");
    }
  }, [shouldPlay]);

  const lettersElements = letters.map((letter, index) => (
    <ReactSVG
      src={`/nameLetters/${letter}.svg`}
      key={index}
      className="flex-1 h-full "
      wrapper="span"
      beforeInjection={(svg) => {
        svg.style.width = "100%";
        svg.style.height = "100%";
        svg.setAttribute("preserveAspectRatio", "none");
        const path = svg.querySelector("path");
        if (path) {
          path.setAttribute("fill", "#FFD000");
        }
      }}
    />
  ));

  return (
    <div id="background-letters" className="w-full h-[80%] absolute z-1 flex">
      <div className="flex w-full h-full">{lettersElements}</div>
    </div>
  );
};

export default BackgroundLetters;
