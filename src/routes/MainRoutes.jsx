import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { PrivateRoutes } from "./PrivateRoutes/PrivateRoutes";
import { ErrorPage } from "../pages/ErrorPage";
import { PublicRoutes } from "./PublicRoutes/PublicRoutes";
import { Users } from "../pages/Users/Users";
import { UsersProvider } from "../providers/UsersContext";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/users"
          element={
            <UsersProvider>
              <Users />
            </UsersProvider>
          }
        />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
