import React, { useState } from "react";
import { DropZone } from "../../atoms/DropZone";
import "./TrainingModal.css";
import { Backdrop } from "../../atoms/Backdrop";
import { ModalHeader } from "../../atoms/ModalHeader";
import { Button } from "../../atoms/Button/Button";
import "./TrainingModal.css";
import { useGlobalContext } from "../../../context";

export const TrainingModal = ({
  open,
  title,
  successBtn,
  cancelBtn,
  onClose,
  onCancel,
  onSubmit,
  data = {
    thumb: "",
    name: "",
    description: "",
    timeToComplete: "",
    activationDate: "",
    deactivationDate: "",
  },
}) => {
  const { isNewTrainingModalOpen, closeNewTrainingModal } = useGlobalContext();
  const [thumb, setThumb] = useState(data.thumb);
  const [name, setName] = useState(data.name);
  const [description, setDescription] = useState(data.description);
  const [timeToComplete, setTimeToComplete] = useState(data.timeToComplete);
  const [activationDate, setActivationDate] = useState(data.activationDate);
  const [deactivationDate, setDeactivationDate] = useState(
    data.deactivationDate
  );

  const onSuccess = () => {
    onSubmit({
      thumb,
      name,
      description,
      timeToComplete,
      activationDate,
      deactivationDate,
    });

    setThumb("");
    setName("");
    setDescription("");
    setTimeToComplete("");
    setActivationDate("");
    setDeactivationDate("");
    closeNewTrainingModal();
  };

  const handleImageUpload = (image) => {
    setThumb(image);
  };

  console.log(data.name);

  return (
    <>
      {open && <Backdrop />}
      <div className={`side-modal ${open ? "side-modal--show" : ""}`}>
        <ModalHeader title={title} onClose={onClose} />
        <DropZone
          onImageUpload={handleImageUpload}
          clearThumb={isNewTrainingModalOpen}
        />
        <div className="module-form">
          <div className="module-form__group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="module-form__group">
            <label htmlFor="description">Descrição:</label>
            <textarea
              name="description"
              id="description"
              rows="10"
              cols="30"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="module-form__group">
            <label htmlFor="time-to-complete">Carga horária:</label>
            <input
              type="text"
              id="time-to-complete"
              name="time-to-complete"
              value={timeToComplete}
              onChange={(e) => setTimeToComplete(e.target.value)}
            />
          </div>
          <div className="module-form__group module-form__group--horizontal">
            <div className="module-form__group module-form__group--span">
              <label htmlFor="activation-date">Início do curso:</label>
              <input
                type="date"
                id="activation-date"
                name="activation-date"
                value={activationDate}
                onChange={(e) => setActivationDate(e.target.value)}
              />
            </div>
            <div className="module-form__group module-form__group--span">
              <label htmlFor="deactivation-date">Fim do curso:</label>
              <input
                type="date"
                id="deactivation-date"
                name="deactivation-date"
                value={deactivationDate}
                onChange={(e) => setDeactivationDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="side-modal__buttons">
          {cancelBtn && (
            <>
              <Button text={cancelBtn} type="error" onClick={onCancel} />
              <Button text={successBtn} type="success" onClick={onSuccess} />
            </>
          )}
          {!cancelBtn && (
            <Button
              text={successBtn}
              type="success"
              className="side-modal__button side-modal__button--side"
              onClick={onSuccess}
            />
          )}
        </div>
      </div>
    </>
  );
};
