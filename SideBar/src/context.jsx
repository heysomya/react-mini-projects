import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisibility(!sidebarVisibility);
  };

  const toggleModal = () => {
    setModalVisibility(!modalVisibility);
  };

  return (
    <AppContext.Provider
      value={{ sidebarVisibility, toggleSidebar, modalVisibility, toggleModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
