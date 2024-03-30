import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

import { Scientist } from "../services/types";
import { getScientistsFromAPI } from "../services/api";

interface ScientistsListContextProps {
  scientistsData: Scientist[];
}

interface ScientistsListProviderProps {
  children: ReactNode;
}

const ScientistsListContext = createContext({} as ScientistsListContextProps);

export function ScientistsListProvider({ children }: ScientistsListProviderProps) {
  const [scientistsData, setScientistsData] = useState<Scientist[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getScientistsFromAPI();
        setScientistsData(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
