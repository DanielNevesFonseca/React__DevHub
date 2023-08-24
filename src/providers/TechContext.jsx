import { createContext, useContext } from "react";
import { useState } from "react";
import { kenzieHubApi } from "../services/kenzieHubApi";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { dataUser } = useContext(UserContext);
  const [createModalStatus, setCreateModalStatus] = useState(false);
  const [editModalStatus, setEditModalStatus] = useState(false);
  const [techList, setTechList] = useState(
    dataUser?.techs ? dataUser.techs : []
  );
  const [editingTech, setEditingTech] = useState(null);

  const createTech = async (formData) => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:userToken"));
    try {
      const { data } = await kenzieHubApi.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechList([
        ...techList,
        { title: data.title, status: data.status, id: data.id },
      ]);
      toast.success("Tech adicionada com sucesso!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteTech = async (taskDeletingId) => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:userToken"));
    try {
      await kenzieHubApi.delete(`users/techs/${taskDeletingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechList = techList.filter((tech) => tech.id !== taskDeletingId);
      setTechList(newTechList);
      toast.success("Tech deletada com sucesso!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const editTech = async (formData) => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:userToken"));
    try {
      const { data } = await kenzieHubApi.put(
        `/users/techs/${editingTech.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newTechList = techList.map((tech) => {
        if (tech.id === editingTech.id) {
          return data;
        } else {
          return tech;
        }
      });
      setTechList(newTechList);
      toast.success("A Tech foi editada com sucesso!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const closeModal = (typeOfModal) => {
    if (typeOfModal === "create") {
      setCreateModalStatus(false);
    } else if (typeOfModal === "edit") {
      setEditModalStatus(false);
    }
  };

  const openModal = (typeOfModal) => {
    if (typeOfModal === "create") {
      setCreateModalStatus(true);
    } else if (typeOfModal === "edit") {
      setEditModalStatus(true);
    }
  };

  return (
    <TechContext.Provider
      value={{
        editTech,
        editingTech,
        createModalStatus,
        editModalStatus,
        closeModal,
        openModal,
        createTech,
        techList,
        deleteTech,
        setEditingTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
