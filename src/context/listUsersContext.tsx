import { createContext, useState, useContext, useEffect, ReactNode } from "react";

import { UsersDataProps } from "../services/types";
import { getUsersFromAPI } from "../services/api";

interface ListUsersContextProps {
  usersData: UsersDataProps[];
  openModal: boolean;
  page: number;
  setPage: (param: number) => void;
  handleModal: (param: boolean) => void;
}

interface ListUsersProviderProps {
  children: ReactNode;
}


export const ListUsersContext = createContext({} as ListUsersContextProps);

export function ListUsersProvider({ children }: ListUsersProviderProps) {
  const [usersData, setUsersData] = useState<UsersDataProps[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getUsersFromAPI(page);
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
    <ListUsersContext.Provider
      value={{ usersData, page, setPage, openModal, handleModal }}
    >
      {children}
    </ListUsersContext.Provider>
  );
}

export const useListUsersContext = () => {
  return useContext(ListUsersContext);
};
