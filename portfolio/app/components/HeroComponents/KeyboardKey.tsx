import React, { FC } from "react";
import Image from "next/image";

interface KeyBoardKeyProps {
  keyNumber: number;
  keyRef?: (element: HTMLDivElement | null) => void;
}

const KeyboardKey: FC<KeyBoardKeyProps> = ({ keyNumber, keyRef }) => {
  return (
    <div
      ref={keyRef}
      className={`absolute w-full h-full key-number${keyNumber}`}
    >
      <Image
        src={`/keyboard/key_${keyNumber}.png`}
        alt="Keyboard key"
        width={800}
        height={300}
        className="w-full h-full object-contain absolute"
      />
    </div>
  );
};

export default KeyboardKey;
