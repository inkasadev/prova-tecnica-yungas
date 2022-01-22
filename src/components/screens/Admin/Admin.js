import React from "react";
import { useGlobalContext } from "../../../context";
import { Breadcrumb } from "../../atoms/Breadcrumb";
import { ListCourses } from "../../patterns/ListCourses";
import { Navbar } from "../../patterns/Navbar";
import { Sidenav } from "../../patterns/Sidenav";
import { TrainingModal } from "../../patterns/TrainingModal/TrainingModal";
import "./Admin.css";

export const Admin = () => {
  const {
    isSidebarOpen,
    isNewTrainingModalOpen,
    closeNewTrainingModal,
    isEditTrainingModalOpen,
    closeEditTrainingModal,
    createTraining,
    courseToEdit,
  } = useGlobalContext();

  const onSubmit = (e) => {
    createTraining(e);
  };

  return (
    <>
      <TrainingModal
        title="novo treinamento"
        open={isNewTrainingModalOpen}
        successBtn="criar"
        onClose={closeNewTrainingModal}
        onSubmit={onSubmit}
      />
      <Sidenav />
      <div className={`container ${isSidebarOpen ? "container--sidenav" : ""}`}>
        <div className="main-page">
          <Navbar />
          <Breadcrumb />
          <main>
            <ListCourses />
          </main>
        </div>
      </div>
    </>
  );
};
