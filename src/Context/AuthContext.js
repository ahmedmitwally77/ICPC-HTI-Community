import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(localStorage.getItem("userToken") || null);
  const [userData, setUserData] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

   // استعادة التوكن من localStorage عند تحميل التطبيق
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (token && user) {
      setUserToken(token);
      setUserData(user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userToken, setUserToken , userData, setUserData}}>
      {children}
    </AuthContext.Provider>
  );
};
