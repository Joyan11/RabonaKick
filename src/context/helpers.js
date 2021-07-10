/** @format */

import axios from "axios";
import { toastMessages } from "../utils/toastMessages";

export function setupAuthExceptionHandler(logOut, navigate) {
  const UNAUTHORIZED = 401;
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === UNAUTHORIZED) {
        console.log("running");
        logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
}

export function setUniversalRequestToken(token) {
  if (token) {
    return (axios.defaults.headers.common["Authorization"] = token);
  }
  delete axios.defaults.headers.common["Authorization"];
}
