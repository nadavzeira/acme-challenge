import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

import { Scientist } from "../services/types";
import { getScientistsFromAPI } from "../services/api_v2";
import { useFiltersContext } from "./filtersContext";

interface ScientistsListContextProps {
  scientistsData: Scientist[];
}

interface ScientistsListProviderProps {
  children: ReactNode;
}

const ScientistsListContext = createContext({} as ScientistsListContextProps);

export function ScientistsListProvider({ children }: ScientistsListProviderProps) {
  const [scientists, setScientists] = useState<Scientist[]>([]);
  const [filteredScientists, setFilteredScientists] = useState<Scientist[]>([]);

  const { searchQuery, genderFilter, nationalityFilter } = useFiltersContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getScientistsFromAPI(genderFilter || 'All', nationalityFilter || []);

        setScientists(results);
        setFilteredScientists(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [genderFilter, nationalityFilter]);

  useEffect(() => {
    const filtered = scientists.filter(
      ({ gender, nat, name }) => {
        const isGender = (genderFilter === "All" || gender === genderFilter);
        const isNat = (!nationalityFilter.length || nationalityFilter.includes(nat));
        const isSearch = `${name.first}${name.last}`.toLowerCase().includes(searchQuery.trim().toLowerCase()); 
        
        return (
          isGender && isNat && isSearch
        )
      }
    );  

    setFilteredScientists(filtered);
  }, [scientists, searchQuery, genderFilter, nationalityFilter]);

  return (
    <ScientistsListContext.Provider value={{ scientistsData: filteredScientists }}>
      {children}
    </ScientistsListContext.Provider>
  );
}

export const useScientistsListContext = () => {
  return useContext(ScientistsListContext);
};