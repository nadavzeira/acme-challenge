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
  const [scientistsData, setScientistsData] = useState<Scientist[]>([]);
  const { genderFilter, nationalityFilter } = useFiltersContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getScientistsFromAPI(genderFilter, nationalityFilter);
        setScientistsData(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [genderFilter, nationalityFilter]);

  return (
    <ScientistsListContext.Provider value={{ scientistsData }}>
      {children}
    </ScientistsListContext.Provider>
  );
}

export const useScientistsListContext = () => {
  return useContext(ScientistsListContext);
};
