import { useState, useContext, createContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const [pageId, setPageId] = useState(null);

  const toggleSidebar = () => {
    setSidebarVisibility(!sidebarVisibility);
  };
  return (
    <AppContext.Provider
      value={{ sidebarVisibility, toggleSidebar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
