import React from "react";
import { ModalHeader } from ".";

export default {
  title: "atoms/Modal Header",
};

const Template = ({ title }) => <ModalHeader title={title} />;

export const Standard = Template.bind({});
Standard.args = {
  title: "novo treinamento",
};
