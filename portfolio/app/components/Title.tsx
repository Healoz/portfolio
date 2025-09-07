import React, { FC, ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => {
  return <h2>{children}</h2>;
};

export default Title;
