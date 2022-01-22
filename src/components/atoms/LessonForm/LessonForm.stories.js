import React from "react";
import { LessonForm } from ".";

export default {
  title: "atoms/Lesson Form",
  component: LessonForm,
};

const Template = ({ text }) => <LessonForm text={text} />;

export const Standard = Template.bind({});
/* Standard.args = {
  text: "seus treinamentos",
}; */
