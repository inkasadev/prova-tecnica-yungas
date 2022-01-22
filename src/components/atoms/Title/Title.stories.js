import React from "react";
import { Title } from ".";

export default {
  title: "atoms/Title",
  component: Title,
};

const Template = ({ text }) => <Title text={text} />;

export const Standard = Template.bind({});
Standard.args = {
  text: "seus treinamentos",
};
