import React from "react";
import { Button } from ".";

export default {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    style: {
      options: ["success", "error", "info"],
      control: { type: "select" },
      defaultValue: "info",
    },
  },
};

const Template = ({ text, style }) => <Button text={text} style={style} />;

export const Standard = Template.bind({});
Standard.args = {
  text: "novo treinamento",
};
