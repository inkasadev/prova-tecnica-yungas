import React from "react";
import { useGlobalContext } from "../../../context";
import { Icon } from "../../atoms/Icon/Icon";
import { UserInfo } from "../../atoms/UserInfo";
import "./Navbar.css";

export const Navbar = () => {
  const { user, isSidebarOpen, openSidebar } = useGlobalContext();

  return (
    <div className={`navbar ${isSidebarOpen ? "navbar--sidenav-open" : ""}`}>
      {!isSidebarOpen && <Icon name="bars" onClick={openSidebar} />}
      <UserInfo {...user} />
    </div>
  );
};
