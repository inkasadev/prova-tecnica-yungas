import React, { useState, useContext, useEffect } from "react";
import { api } from "./services/axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState({});
  const [isNewTrainingModalOpen, setIsNewTrainingModalOpen] = useState(false);
  const [isEditTrainingModalOpen, setIsEditTrainingModalOpen] = useState(true);
  const [courseToEdit, setCourseToEdit] = useState({});

  const openNewTrainingModal = () => {
    setIsNewTrainingModalOpen(true);
  };

  const closeNewTrainingModal = () => {
    setIsNewTrainingModalOpen(false);
  };

  const openEditTrainingModal = () => {
    setIsEditTrainingModalOpen(true);
  };

  const closeEditTrainingModal = () => {
    setIsEditTrainingModalOpen(false);
  };

  const fetchUser = async () => {
    try {
      const response = await api.get("/users/1");
      const { data } = response;
      setUser(data.users);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const createTraining = (data) => {
    api.post("/courses", { ...data, createdBy: Number(user.id) });
  };

  return (
    <AppContext.Provider
      value={{
        user,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isNewTrainingModalOpen,
        openNewTrainingModal,
        closeNewTrainingModal,
        isEditTrainingModalOpen,
        openEditTrainingModal,
        closeEditTrainingModal,
        createTraining,
        courseToEdit,
        setCourseToEdit,
      }}
    >
      {" "}
      {children}{" "}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
