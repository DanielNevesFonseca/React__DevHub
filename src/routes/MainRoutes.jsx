import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { useState } from "react";
import { toast } from "react-toastify";


export const MainRoutes = () => {
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState(null);

  const logout = () => {
    setDataUser(null);
    toast.success("Voltando para página de login.");
    localStorage.removeItem("@KenzieHub:userToken");
    
    setTimeout(() => {
      navigate("/");
    }, 2 * 1000);
  };
  return (
    <Routes>
      <Route path="/" element={<Login setDataUser={setDataUser} />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={<Dashboard dataUser={dataUser} setDataUser={setDataUser} logout={logout} />}
      />
    </Routes>
  );
};
