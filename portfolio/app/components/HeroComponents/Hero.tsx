import React from "react";
import Keyboard from "./Keyboard";
import ScrollingText from "./ScrollingText";

const Hero = () => {
  return (
    <div>
      <div className="h-dvh w-full flex flex-col items-center justify-center ">
        <Keyboard />
        <ScrollingText />
      </div>
    </div>
  );
};

export default Hero;
