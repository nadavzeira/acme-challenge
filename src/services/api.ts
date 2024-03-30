import axios from "axios";
import { ScientistAPI, Scientist } from "./types";
import { transformScientist } from "./utils";

const api = axios.create({
  baseURL: "https://randomuser.me/api",
});

export const getScientistsFromAPI = async (): Promise<Scientist[]> => {
  const SEED = 'Cgen';
  const queryURL = `/?results=300&seed=${SEED}}`;
  const { data: { results } } = await api.get<{ results: ScientistAPI[] }>(queryURL);

  return results.map(transformScientist);
};

export default api;
