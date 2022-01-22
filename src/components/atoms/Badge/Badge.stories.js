import React from "react";
import { Badge } from ".";

export default {
  title: "atoms/Badge",
  component: Badge,
};

const Template = ({ isEnabled }) => <Badge isEnabled={isEnabled} />;

export const Standard = Template.bind({});
Standard.args = {
  isEnabled: true,
};
