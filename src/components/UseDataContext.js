import { createContext } from "react";
import { useState } from "react";

export const UserDataContext = createContext({});

export default function UserLoginProvider({ children }) {
    const objectUser = localStorage.getItem("user");
    const userOnLocalStorage = JSON.parse(objectUser);
    const [user, setUser] = useState(
      userOnLocalStorage !== null ? userOnLocalStorage : {}
    );
  
    function setAndPersistUser(userLogin) {
      setUser(userLogin);
      const stringUser = JSON.stringify(userLogin);
      localStorage.setItem("user", stringUser);
    }
  
    return (
      <UserDataContext.Provider value={{ user, setAndPersistUser }}>
        {children}
      </UserDataContext.Provider>
    );
}