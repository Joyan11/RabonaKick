/** @format */

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { setUniversalRequestToken, setupAuthExceptionHandler } from "./helpers";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState(null);
  const [authLoader, setAuthloader] = useState(false);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUserData("");
  };

  const checkUserPass = async (email, password) => {
    try {
      setErrorMessage("");
      setAuthloader(true);
      const {
        status,
        data: { success, token, userdata },
      } = await axios.post(`https://rabonaserver.joyan11.repl.co/auth/login`, {
        user: {
          email: email,
          password: password,
        },
      });
      if (success === true && status === 200) {
        setUniversalRequestToken(token);
        setupAuthExceptionHandler(logOut, navigate);
        setToken(token);
        setUserData(userdata);
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(userdata));
      }
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 403) {
        setErrorMessage("Email/Password incorrect");
      }
    } finally {
      setAuthloader(false);
    }
  };

  return (
    <authContext.Provider
      value={{
        errorMessage,
        setErrorMessage,
        token,
        setToken,
        userData,
        setUserData,
        checkUserPass,
        authLoader,
        setAuthloader,
        logOut,
      }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
