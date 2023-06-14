import { useState, createContext } from "react";

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [searchmovie, setSearchmovie] = useState("");

  return (
    <userContext.Provider
      value={{
        setSearchmovie,
        searchmovie,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
