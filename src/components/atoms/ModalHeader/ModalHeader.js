import React from "react";
import { Icon } from "../Icon/Icon";
import { Title } from "../Title";
import "./ModalHeader.css";

export const ModalHeader = ({ title, onClose }) => {
  return (
    <div className="modal-header">
      <Icon name="close" onClick={onClose} />
      <Title text={title} />
      <Icon name="question-circle" />
    </div>
  );
};
