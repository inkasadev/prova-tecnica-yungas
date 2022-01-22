import React from "react";
import { Icon } from "./Icon";

export default {
  title: "atoms/Icon",
  component: <Icon />,
  argTypes: {
    name: {
      options: ["bars", "home", "chair"],
      control: { type: "select" },
      defaultValue: "bars",
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
      defaultValue: "medium",
    },
  },
};

export const Standard = ({ name, size }) => {
  return <Icon name={name} size={size} />;
};
