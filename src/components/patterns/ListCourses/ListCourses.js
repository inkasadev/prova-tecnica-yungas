import React, { useCallback, useEffect, useState } from "react";
import { useGlobalContext } from "../../../context";
import { Button } from "../../atoms/Button/Button";
import { Title } from "../../atoms/Title";
import { CourseCard } from "../CourseCard";
import { api } from "../../../services/axios";
import "./ListCourses.css";

export const ListCourses = () => {
  const { user, isNewTrainingModalOpen, openNewTrainingModal } =
    useGlobalContext();
  const [courses, setCourses] = useState([]);

  const fetchCourses = useCallback(async () => {
    const response = await api.get(`/courses/${user.id}`);
    const { data } = response;
    setCourses(data.courses);
  }, [user, setCourses]);

  const handleNewTrainingClick = () => {
    openNewTrainingModal();
  };

  useEffect(() => {
    fetchCourses();
  }, [isNewTrainingModalOpen, fetchCourses]);

  return (
    <div className="list-courses">
      <div className="list-courses__header">
        <Title text="Seus treinamentos" />
        <Button text="Novo Treinamento" onClick={handleNewTrainingClick} />
      </div>
      <div className="list-courses__list">
        {courses.map((course) => {
          return <CourseCard key={course.id} {...course} />;
        })}
      </div>
    </div>
  );
};
