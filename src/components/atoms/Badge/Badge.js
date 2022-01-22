import React from "react";
import "./Badge.css";

export const Badge = ({ isEnabled }) => {
  const text = isEnabled ? "Habilitado" : "Desabilitado";
  return (
    <div className={`badge ${isEnabled ? "" : "badge--disabled"}`}>{text}</div>
  );
};
