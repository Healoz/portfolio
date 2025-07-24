import React, { FC } from "react";

interface KeyBoardKeyProps {
  keyNumber: number;
}

const KeyboardKey: FC<KeyBoardKeyProps> = ({ keyNumber }) => {
  return (
    <div className="absolute w-full h-full">
      <img
        src={`/keyboard/key_${keyNumber}.png`}
        className="w-full h-full object-contain absolute "
      />
    </div>
  );
};

export default KeyboardKey;
