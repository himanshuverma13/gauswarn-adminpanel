import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [UserLogins, setUserLogin] = useState();
  return (
    <UserContext.Provider
      value={{
        UserLogins, setUserLogin
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
