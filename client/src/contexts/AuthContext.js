import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const storedUserRole = localStorage.getItem("role");

    if (token) {
      setAccessToken(token);
      setIsLoggedIn(true);
    }
    if (storedUserRole) {
      setUserRole(storedUserRole);
    }

    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userRole,
        setUserRole,
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
