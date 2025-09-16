import React, { FC, ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode;
  backgroundColour?: string;
}

const ContentContainer: FC<ContentContainerProps> = ({
  children,
  backgroundColour,
}) => {
  return (
    <section
      className={`px-8 py-28 md:px-10 md:py-32 flex justify-center w-full bg-${backgroundColour}`}
    >
      <div className="max-w-7xl w-full">{children}</div>
    </section>
  );
};

export default ContentContainer;
