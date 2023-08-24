import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import { TechProvider } from "../../providers/TechContext";

export const PrivateRoutes = () => {
  const { dataUser } = useContext(UserContext);

  return dataUser ? (
    <TechProvider>
      <Outlet />
    </TechProvider>
  ) : (
    <Navigate to="/" />
  );
};
