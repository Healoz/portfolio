"use client";
import React from "react";
import KeyboardKey from "./KeyboardKey";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Keyboard = () => {
  const keys = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const keyBoardRef = useRef<HTMLDivElement>(null);
  const keyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationTimeline = gsap.timeline({
    defaults: { duration: 0.5, ease: "back.out(1)" },
  });

  // gsap animation
  const entranceAnimation = () => {
    if (keyBoardRef.current) {
      animationTimeline.from(keyBoardRef.current, {
        scale: 0.1,
        y: "-100vh",
        opacity: 0,
        rotate: "10deg",
        duration: 2,
      });
    }
  };

  const keyPressAnimation = () => {
    const randomizedKeys = keyRefs.current
      .map((keyRef, index) => ({ keyRef, index }))
      .filter((item) => item.keyRef !== null)
      .sort(() => Math.random() - 0.5);

    randomizedKeys.forEach(({ keyRef }, index) => {
      if (keyRef) {
        animationTimeline
          .to(keyRef, { y: 100, scale: 0.9 }, "<0.1")
          .to(keyRef, { y: 0, scale: 1 }, "<0.1");
      }
    });
  };

  useEffect(() => {
    entranceAnimation();
    keyPressAnimation();
  }, []);

  return (
    <div
      ref={keyBoardRef}
      className="w-[95%] h-[50%] md:w-[70%] md:h-[75%] max-w-6xl relative overflow-hidden"
    >
      <div
        onMouseEnter={keyPressAnimation}
        className="absolute z-10 w-full rotate-150 top-40 h-[40%] md:top-70 md:h-[30%] lg:top-50 lg:h-[45%]"
      ></div>
      <img
        src="/keyboard/base_1.png"
        className="w-full h-full object-contain absolute"
      />
      {keys.map((keyNumber, index) => (
        <KeyboardKey
          keyNumber={keyNumber}
          key={keyNumber}
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
