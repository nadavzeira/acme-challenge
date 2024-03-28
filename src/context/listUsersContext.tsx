import { createContext, useState, useContext, useEffect } from "react";

import {
  ListUsersContextProps,
  ListUsersProviderProps,
  UsersDataProps,
} from "../services/types";
import { getUsersFromAPI } from "../services/api";

export const ListUsersContext = createContext({} as ListUsersContextProps);

export function ListUsersProvider({ children }: ListUsersProviderProps) {
  const [usersData, setUsersData] = useState<UsersDataProps[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getUsersFromAPI();
        setUsersData(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function handleModal(param: boolean) {
    setOpenModal(param);
  }

  return (
    <ListUsersContext.Provider value={{ usersData, openModal, handleModal }}>
      {children}
    </ListUsersContext.Provider>
  );
}

export const useListUsersContext = () => {
  return useContext(ListUsersContext);
};
