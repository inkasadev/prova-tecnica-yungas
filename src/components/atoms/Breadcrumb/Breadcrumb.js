import React from "react";
import "./Breadcrumb.css";

export const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <a href="/" className="breadcrumb__link">
        Home
      </a>
      <span className="breadcrumb__arrow">&gt;</span>
      <a href="/" className="breadcrumb__link">
        Treinamento
      </a>
    </div>
  );
};
