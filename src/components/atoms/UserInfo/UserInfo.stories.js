import React from "react";
import { UserInfo } from ".";
import { AppProvider } from "../../../context";

export default {
  title: "atoms/User Info",
  component: <UserInfo />,
};

const Template = (props) => {
  return (
    <AppProvider>
      <UserInfo {...props} />
    </AppProvider>
  );
};
export const Standard = Template.bind({});
Standard.args = {
  name: "Lucas Mendes",
  accountType: "Key Account",
  image: "/assets/profile.png",
};
