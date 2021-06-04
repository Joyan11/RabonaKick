import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export const PrivateRoute = ({ path, ...props }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};
