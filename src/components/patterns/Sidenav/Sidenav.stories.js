import React from "react";
import { Sidenav } from ".";
import { AppProvider } from "../../../context";

export default {
  title: "patterns/Sidenav",
};

export const Standard = () => {
  return (
    <AppProvider>
      <Sidenav />
    </AppProvider>
  );
};
