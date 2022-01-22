import React from "react";
import { useGlobalContext } from "../../../context";
import { Badge } from "../../atoms/Badge/Badge";
import { Icon } from "../../atoms/Icon/Icon";
import "./CourseCard.css";

export const CourseCard = (course) => {
  const { openEditTrainingModal, setCourseToEdit } = useGlobalContext();

  const handleEdit = () => {
    setCourseToEdit(course);
    openEditTrainingModal();
  };

  return (
    <div className="course-card">
      <div className="course-card__thumb">
        <img
          src={course.thumb}
          alt="Thumb do curso"
          className="course-card__thumb-image"
        />
      </div>
      <div className="course-card__info">
        <div className="course-card__course-title">{course.name}</div>
        <div className="course-card__course-description">{`${course.description.substring(
          0,
          39
        )}...`}</div>
      </div>
      <div className="course-card__options">
        <Badge />
        <div className="course-card__buttons">
          <Icon name="edit" onClick={handleEdit} />
          <Icon name="trash-alt" />
        </div>
      </div>
    </div>
  );
};
