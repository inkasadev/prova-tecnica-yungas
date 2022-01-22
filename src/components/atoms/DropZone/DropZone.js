import React, { useRef, useState, useEffect } from "react";
import { Icon } from "../Icon/Icon";
import "./DropZone.css";

export const DropZone = ({ onImageUpload, clearThumb }) => {
  const [thumb, setThumb] = useState(null);
  const inputElement = useRef(null);

  const handleClick = () => {
    inputElement.current.click();
  };

  useEffect(() => {
    setThumb(null);
  }, [clearThumb]);

  const handleChange = (e) => {
    if (inputElement.current.files.length) {
      const file = inputElement.current.files[0];
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          if (onImageUpload) onImageUpload(reader.result);
          setThumb(reader.result);
        };
        return;
      }
      setThumb(null);
    }
  };

  return (
    <div className="drop-zone" onClick={handleClick}>
      {!thumb && (
        <span className="drop-zone__prompt">
          <Icon name="camera" />
          Selecione uma imagem
        </span>
      )}
      {thumb && (
        <img className="drop-zone__thumb" src={thumb} alt="Thumb do curso" />
      )}
      <input
        ref={inputElement}
        type="file"
        className="drop-zone__input"
        onChange={handleChange}
      />
    </div>
  );
};
