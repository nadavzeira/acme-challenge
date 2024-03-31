import { createContext, useState, useContext, ReactNode } from "react";
import { GenderSelect } from "../services/types";

interface FiltersContextProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  genderFilter: GenderSelect;
  setGenderFilter: (gender: GenderSelect) => void;
  nationalityFilter: string[];
  setNationalityFilter: (nationality: string[]) => void;
}

const FiltersContext = createContext({} as FiltersContextProps);

interface FiltersProviderProps {
  children: ReactNode;
}

export function FiltersProvider({ children }: FiltersProviderProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [genderFilter, setGenderFilter] = useState<GenderSelect>("All");
  const [nationalityFilter, setNationalityFilter] = useState<string[]>([]);

  return (
    <FiltersContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        genderFilter,
        setGenderFilter,
        nationalityFilter,
        setNationalityFilter,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

export const useFiltersContext = () => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error("useFiltersContext must be used within a FiltersProvider");
  }

  return context;
};
