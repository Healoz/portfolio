import React, { useEffect, useState } from "react";
import Keyboard from "./Keyboard";
import ScrollingText from "./ScrollingText";
import BackgroundLetters from "./BackgroundLetters";
import Button from "../Button";

const Hero = () => {
  const [shouldPlayTextAnimation, setShouldPlayTextAnimation] = useState(false);
  const [backgroundNameAmount, setBackgroundNameAmount] = useState(1);
  const [currentOffset, setCurrentOffset] = useState(0);
  const colourSequence = ["#ffd000", "#ff3300", "#606586"];
  const [currentColourIndex, setCurrentColourIndex] = useState(0);

  const OFFSET_INCREMENT = 10;

  useEffect(() => {
    console.log("new letters added" + backgroundNameAmount);
    backgroundNameAmount;
    // on hover, a new instance of background letter should be created
  }, [backgroundNameAmount]);

  const addBgLetterElement = () => {
    // increment to next colour
    if (currentColourIndex === 2) {
      setCurrentColourIndex(0);
    } else {
      setCurrentColourIndex((prev) => prev + 1); // increment if not 3
    }

    // increase x Offset
    setCurrentOffset((prev) => prev + OFFSET_INCREMENT);

    setBackgroundNameAmount((prevAmount) => prevAmount + 1);
    // increment colourSequence
  };

  const backgroundLettersElements = Array.from({
    length: backgroundNameAmount,
  }).map((_, i) => {
    return (
      <div key={i}>
        <BackgroundLetters
          xOffset={currentOffset}
          colour={colourSequence[currentColourIndex]}
        />
      </div>
    );
  });

  return (
    <div>
      <div className="h-dvh flex relative">
        {backgroundLettersElements}
        <BackgroundLetters xOffset={30} colour="#ffd000" />
        <div className="h-full w-full flex flex-col items-center justify-center z-10 relative">
          <Keyboard addBgLetterElement={addBgLetterElement} />
          <div className="absolute right-[15%] bottom-[35%]">
            <Button colour="red-500">Get in touch</Button>
          </div>
          <ScrollingText />
        </div>
      </div>
    </div>
  );
};

export default Hero;
