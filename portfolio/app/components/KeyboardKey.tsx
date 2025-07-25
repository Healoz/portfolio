import React, { FC } from "react";

interface KeyBoardKeyProps {
  keyNumber: number;
  keyRef?: (element: HTMLDivElement | null) => void;
}

const KeyboardKey: FC<KeyBoardKeyProps> = ({ keyNumber, keyRef }) => {
  return (
    <div ref={keyRef} className="absolute w-full h-full">
      <img
        src={`/keyboard/key_${keyNumber}.png`}
        className="w-full h-full object-contain absolute "
      />
    </div>
  );
};

export default KeyboardKey;
