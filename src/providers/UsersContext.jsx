import { createContext, useEffect, useState } from "react";
import { kenzieHubApi } from "../services/kenzieHubApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UsersContext = createContext({});

export const UsersProvider = ({ children }) => {
  const [usersList, setUsersList] = useState([]);
  const [loadingPage, setLoadingPage] = useState(false);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      setLoadingPage(true);
      const { data } = await kenzieHubApi.get(
        `/users/?perPage=40&page=${page}`
      );
      setUsersList(data);
      console.log(page);
    } catch (error) {
      toast.error("Houve algum erro!");
    } finally {
      setLoadingPage(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getUsers();
  }, [page]);

  const plusOnePage = () => {
    setPage(page + 1);
  };

  const minusOnePage = () => {
    setPage(page - 1);
  };

  const redirectToDashboard = () => {
    toast.success("Redirecionando para Dashboard!");
    setTimeout(() => {
      navigate("/dashboard");
      setPage(1);
    }, 1000);
  };

  return (
    <UsersContext.Provider
      value={{
        usersList,
        setUsersList,
        plusOnePage,
        minusOnePage,
        page,
        loadingPage,
        redirectToDashboard,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
