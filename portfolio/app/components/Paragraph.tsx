import React, { FC, ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
}

const Paragraph: FC<ParagraphProps> = ({ children }) => {
  return <p className="text-xl">{children}</p>;
};

export default Paragraph;
