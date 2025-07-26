import React from "react";
import Keyboard from "./Keyboard";
import ScrollingText from "./ScrollingText";
import BackgroundLetters from "./BackgroundLetters";

const Hero = () => {
  return (
    <div>
      <div className="h-dvh flex relative">
        <BackgroundLetters />
        <div className="h-full w-full flex flex-col items-center justify-center z-10">
          <Keyboard />
          <ScrollingText />
        </div>
      </div>
    </div>
  );
};

export default Hero;
