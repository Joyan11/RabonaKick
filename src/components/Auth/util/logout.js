export const logOut = (setToken, setUserData, dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  setToken(null);
  setUserData("");
  dispatch({ type: "RESET" });
};
