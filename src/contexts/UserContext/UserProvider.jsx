"use client";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const addUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('user')))
  },[])
  return (
    <UserContext.Provider value={{ user, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
