import React from "react";
import { Admin } from ".";
import { AppProvider } from "../../../context";

export default {
  title: "screens/Admin",
};

export const Standard = () => {
  return (
    <AppProvider>
      <Admin />
    </AppProvider>
  );
};
