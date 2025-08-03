"use client";
import React, { FC } from "react";
import KeyboardKey from "./KeyboardKey";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface KeyboardProps {
  addBgLetterElement: () => void;
}

const Keyboard: FC<KeyboardProps> = ({ addBgLetterElement }) => {
  type KeyObject = {
    fileNumber: number;
    letter: string;
  };

  const keys: KeyObject[] = [
    { fileNumber: 2, letter: "N" },
    { fileNumber: 3, letter: "R" },
    { fileNumber: 4, letter: "E" },
    { fileNumber: 5, letter: "E" },
    { fileNumber: 6, letter: "R" },
    { fileNumber: 7, letter: "T" },
    { fileNumber: 8, letter: "U" },
    { fileNumber: 9, letter: "S" },
    { fileNumber: 10, letter: "A" },
    { fileNumber: 11, letter: "A" },
    { fileNumber: 12, letter: "L" },
    { fileNumber: 13, letter: "E" },
  ];
  const typingOrder = [12, 10, 8, 6, 4, 2, 13, 11, 9, 7, 5, 3];
  const keyBoardRef = useRef<HTMLDivElement>(null);
  const keyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const entranceTimeline = gsap.timeline({
    defaults: { duration: 0.5, ease: "back.out(1)" },
  });
  const loopTimeline = gsap.timeline({
    defaults: { duration: 0.5, ease: "back.out(1)" },
  });

  // TODO: - Fix disappearing keyboard bug

  // gsap animation
  const entranceAnimation = () => {
    if (keyBoardRef.current) {
      entranceTimeline.from(keyBoardRef.current, {
        scale: 0.1,
        y: "-100vh",
        opacity: 0,
        rotate: "10deg",
        duration: 2,
      });
    }
  };

  // TODO: - Make the keyboard animation loop when you hover the keyboard
  const keyPressAnimation = () => {
    typingOrder.forEach((fileNumber) => {
      loopTimeline
        .to(`.key-number${fileNumber}`, { y: 100, scale: 0.9 }, "<0.1")
        .to(`.key-number${fileNumber}`, { y: 0, scale: 1 }, "<0.1");
    });
  };

  const handleMouseEnter = () => {
    keyPressAnimation();
    addBgLetterElement();
  };

  useEffect(() => {
    entranceAnimation();
  }, []);

  return (
    <div
      ref={keyBoardRef}
      className="w-[95%] h-[50%] md:w-[70%] md:h-[75%] max-w-6xl relative overflow-hidden mb-10 rotate-20"
    >
      <div
        onMouseEnter={handleMouseEnter}
        className="absolute z-10 w-full rotate-150 top-40 h-[40%] md:top-70 md:h-[30%] lg:top-50 lg:h-[45%]"
      ></div>
      <img
        src="/keyboard/base_1.png"
        className="w-full h-full object-contain absolute"
      />
      {keys.map((key, index) => (
        <KeyboardKey
          keyNumber={key.fileNumber}
          key={key.fileNumber}
          keyRef={(element) => (keyRefs.current[index] = element)}
        />
      ))}

      <img
        src="/keyboard/base_14.png"
        className="w-full h-full object-contain absolute"
      />
    </div>
  );
};

export default Keyboard;
