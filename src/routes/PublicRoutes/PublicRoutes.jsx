import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export const PublicRoutes = () => {
  const { dataUser } = useContext(UserContext);
  return !dataUser ? <Outlet /> : <Navigate to="/dashboard" />;
};
