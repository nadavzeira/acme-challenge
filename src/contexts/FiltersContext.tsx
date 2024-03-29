import { createContext, useState, useContext, ReactNode } from "react";

interface FiltersContextProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  genderFilter: string;
  setGenderFilter: (gender: string) => void;
  nationalityFilter: string;
  setNationalityFilter: (nationality: string) => void;
}

const FiltersContext = createContext({} as FiltersContextProps);

export const useFiltersContext = () => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error("useFiltersContext must be used within a FiltersProvider");
  }

  return context;
};

interface FiltersProviderProps {
  children: ReactNode;
}

export function FiltersProvider({ children }: FiltersProviderProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [genderFilter, setGenderFilter] = useState<string>("all");
  const [nationalityFilter, setNationalityFilter] = useState<string>("all");

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
