import React from "react";
import { Navbar } from ".";
import { AppProvider } from "../../../context";

export default {
  title: "patterns/Navbar",
};

export const Standard = () => {
  return (
    <AppProvider>
      <Navbar />
    </AppProvider>
  );
};
