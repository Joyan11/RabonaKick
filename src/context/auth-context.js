import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState(null);
  const [authLoader, setAuthloader] = useState(false);

  function setUniversalRequestToken(token) {
    if (token) {
      return (axios.defaults.headers.common["Authorization"] = token);
    }
    delete axios.defaults.headers.common["Authorization"];
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));
    setToken(token);
    setUserData(user);
    setUniversalRequestToken(token);
  }, []);

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
        setToken(token);
        setUserData(userdata);
        setUniversalRequestToken(token);
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(userdata));
      }
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 401) {
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
      }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
