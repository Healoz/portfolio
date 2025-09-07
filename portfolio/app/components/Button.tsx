import React, { FC, ReactNode } from "react";

interface ButtonProps {
  colour?: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ colour, children }) => {
  return (
    <button className="bg-primary-orange pt-6 pb-6 pl-10 pr-10 uppercase border">
      {children}
    </button>
  );
};

export default Button;
