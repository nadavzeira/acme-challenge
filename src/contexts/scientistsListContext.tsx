import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

import { Scientist } from "../services/types";
import { getScientistsFromAPI } from "../services/api_v1";
// import { getScientistsFromAPI } from "../services/api_v2";
// import { useFiltersContext } from "./filtersContext";

interface ScientistsListContextProps {
  scientistsData: Scientist[];
}

interface ScientistsListProviderProps {
  children: ReactNode;
}

const ScientistsListContext = createContext({} as ScientistsListContextProps);

export function ScientistsListProvider({ children }: ScientistsListProviderProps) {
  const [scientistsData, setScientistsData] = useState<Scientist[]>([]);

  // For fetchData_v2() :
  // const { genderFilter, nationalityFilter } = useFiltersContext();

  useEffect(() => {
    const fetchData_v1 = async () => {
      try {
        const results = await getScientistsFromAPI();
        setScientistsData(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // const fetchData_v2 = async () => {
    //   try {
    //     const results = await getScientistsFromAPI(genderFilter, nationalityFilter);
    //     setScientistsData(results);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    fetchData_v1();
  }, []);

  return (
    <ScientistsListContext.Provider value={{ scientistsData }}>
      {children}
    </ScientistsListContext.Provider>
  );
}

export const useScientistsListContext = () => {
  return useContext(ScientistsListContext);
};
