import React, {
    createContext,
    useState,
    useContext,
    useEffect,
    ReactNode,
  } from "react";
  import { getUsersFromAPI } from "../services/api";
  import { UsersDataProps } from "../services/types";
  
  interface FiltersContextProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
  }
  
  const FiltersContext = createContext({} as FiltersContextProps);
  
  export const useFiltersContext = () => {
    const context = useContext(FiltersContext);
    if (!context) {
      throw new Error(
        "useFiltersContext must be used within a FiltersProvider"
      );
    }
    return context;
  };
  
  interface FiltersProviderProps {
    children: ReactNode;
  }
  
  export function FiltersProvider({ children }: FiltersProviderProps) {
    const [searchQuery, setSearchQuery] = useState<string>("");
  
    return (
      <FiltersContext.Provider value={{ searchQuery, setSearchQuery }}>
        {children}
      </FiltersContext.Provider>
    );
  }
  