import React, { useState } from "react";
import Keyboard from "./Keyboard";
import ScrollingText from "./ScrollingText";
import BackgroundLetters from "./BackgroundLetters";

const Hero = () => {
  const [shouldPlayTextAnimation, setShouldPlayTextAnimation] = useState(false);

  const triggerBackgroundAnimation = () => {
    setShouldPlayTextAnimation(true);
    setTimeout(() => setShouldPlayTextAnimation(false), 2000);
  };

  return (
    <div>
      <div className="h-dvh flex relative">
        <BackgroundLetters shouldPlay={shouldPlayTextAnimation} />
        <div className="h-full w-full flex flex-col items-center justify-center z-10">
          <Keyboard playTextTypingAnimation={triggerBackgroundAnimation} />
          <ScrollingText />
        </div>
      </div>
    </div>
  );
};

export default Hero;
