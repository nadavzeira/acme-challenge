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
}

interface ListUsersProviderProps {
  children: ReactNode;
}

const ListUsersContext = createContext({} as ListUsersContextProps);

export function ListUsersProvider({ children }: ListUsersProviderProps) {
  const [usersData, setUsersData] = useState<UsersDataProps[]>([]);

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

  return (
    <ListUsersContext.Provider value={{ usersData }}>
      {children}
    </ListUsersContext.Provider>
  );
}

export const useListUsersContext = () => {
  return useContext(ListUsersContext);
};
