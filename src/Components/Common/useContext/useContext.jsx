import React, { createContext, use, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [UserLogins, setUserLogin] = useState();
  const [SidebarOpen, setSidebarOpen] = useState(false);
  return (
    <UserContext.Provider
      value={{
        UserLogins, setUserLogin,
        SidebarOpen,
        setSidebarOpen
      }}
     
    >
      {children}
    </UserContext.Provider>
  );
};
