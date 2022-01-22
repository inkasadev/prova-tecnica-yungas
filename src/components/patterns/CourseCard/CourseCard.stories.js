import React from "react";
import { CourseCard } from ".";

export default {
  title: "patterns/Course Card",
};

export const Standard = ({
  id = 1,
  thumb = "assets/svelte.png",
  name = "Curso de Svelte",
  description = "Um curso para introdução ao Svelte com uso de programação funcional utilizando Ramda e Rx.JS",
}) => {
  return (
    <CourseCard id={id} thumb={thumb} name={name} description={description} />
  );
};
