import React, { FC, ReactNode } from "react";

interface ButtonProps {
  colour?: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ colour, children }) => {
  return (
    <div className="bg-red-500 pt-6 pb-6 pl-10 pr-10 uppercase border">
      {children}
    </div>
  );
};

export default Button;
