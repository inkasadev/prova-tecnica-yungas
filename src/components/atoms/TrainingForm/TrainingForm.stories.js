import React from "react";
import { TrainingForm } from ".";

export default {
  title: "atoms/Training Form",
  component: TrainingForm,
};

const Template = ({ text }) => <TrainingForm text={text} />;

export const Standard = Template.bind({});
/* Standard.args = {
  text: "seus treinamentos",
}; */
