import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface ButtonProps {
  colour?: string;
  children: ReactNode;
  internalLink?: Url;
  externalLink?: string;
}

const Button: FC<ButtonProps> = ({
  colour,
  children,
  internalLink,
  externalLink,
}) => {
  const classes =
    "bg-primary-orange pt-6 pb-6 pl-10 pr-10 uppercase border w-max";
  return (
    <>
      {internalLink ? (
        <Link href={internalLink} className={classes}>
          {children}
        </Link>
      ) : (
        <a href={externalLink} className={classes}>
          {children}
        </a>
      )}
    </>
  );
};

export default Button;
