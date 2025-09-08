import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => {
  return (
    <div className="flex gap-6 items-center text-5xl lg:text-7xl ">
      <FontAwesomeIcon
        icon={faStar}
        className="text-primary-orange star-icon"
      />
      <h2 className="font-extrabold font-heading text-primary-orange whitespace-nowrap">
        {children}
      </h2>
    </div>
  );
};

export default Title;
