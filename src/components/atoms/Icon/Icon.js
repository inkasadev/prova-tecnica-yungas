import React from "react";
import "./Icon.css";

export const Icon = ({
  name = "bars",
  size = "medium",
  onClick,
  className,
}) => {
  return (
    <i
      className={`fas fa-${name} icon icon--${size} ${className}`}
      onClick={onClick}
    ></i>
  );
};
