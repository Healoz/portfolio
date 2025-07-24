import React from "react";
import KeyboardKey from "./KeyboardKey";

const Keyboard = () => {
  const keys = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <div className="w-[95%] h-[50%] md:w-[70%] md:h-[75%] max-w-6xl relative bg-blue-30/40">
      <img
        src="/keyboard/base_1.png"
        className="w-full h-full object-contain absolute"
      />
      {keys.map((keyNumber) => (
        <KeyboardKey keyNumber={keyNumber} key={keyNumber} />
      ))}

      <img
        src="/keyboard/base_14.png"
        className="w-full h-full object-contain absolute"
      />
    </div>
  );
};

export default Keyboard;
