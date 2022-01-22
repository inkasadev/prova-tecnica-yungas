import React from "react";
import "./Button.css";
export const Button = ({ text, type, className, onClick }) => {
  return (
    <div className={`button button--${type} ${className}`} onClick={onClick}>
      {text}
    </div>
  );
};
