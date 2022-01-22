import React from "react";
import { ListCourses } from ".";
import { AppProvider } from "../../../context";

export default {
  title: "patterns/List Courses",
};

export const Standard = () => {
  return (
    <AppProvider>
      <ListCourses />
    </AppProvider>
  );
};
