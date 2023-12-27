import React, { FC, PropsWithChildren } from "react";
import style from "./heading-primary.module.css";

interface HeadingPrimaryProps extends PropsWithChildren {
  className?: string;
}

const HeadingPrimary: FC<HeadingPrimaryProps> = ({ children, className }) => {
  return (
    <h1 className={`${style["heading-primary"]} ${className}`}>{children}</h1>
  );
};

export default HeadingPrimary;
