import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

import { UsersDataProps } from "../services/types";
import { getUsersFromAPI } from "../services/api";

interface ListUsersContextProps {
  usersData: UsersDataProps[];
  page: number;
  setPage: (param: number) => void;
  selectedUser: UsersDataProps | null;
  setSelectedUser: (param: UsersDataProps | null) => void;
}

interface ListUsersProviderProps {
  children: ReactNode;
}

export const ListUsersContext = createContext({} as ListUsersContextProps);

export function ListUsersProvider({ children }: ListUsersProviderProps) {
  const [usersData, setUsersData] = useState<UsersDataProps[]>([]);
  const [page, setPage] = useState(0);
  const [selectedUser, setSelectedUser] = useState<UsersDataProps | null>(null);

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

  return (
    <ListUsersContext.Provider
      value={{
        usersData,
        page,
        setPage,
        selectedUser,
        setSelectedUser,
      }}
    >
      {children}
    </ListUsersContext.Provider>
  );
}

export const useListUsersContext = () => {
  return useContext(ListUsersContext);
};
