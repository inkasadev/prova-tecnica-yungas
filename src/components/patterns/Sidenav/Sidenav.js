import React from "react";
import { useGlobalContext } from "../../../context";
import { Icon } from "../../atoms/Icon/Icon";
import "./Sidenav.css";

export const Sidenav = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidenav ${isSidebarOpen ? "sidenav--show" : ""}`}>
      <Icon
        name="bars"
        size="large"
        className="sidenav__icon"
        onClick={closeSidebar}
      />
      <Icon name="home" size="large" className="sidenav__icon" />
      <Icon name="book-open" size="large" className="sidenav__icon" />
    </aside>
  );
};
