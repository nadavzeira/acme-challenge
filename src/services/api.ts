import axios from "axios";
import { UserAPIProps, UsersDataProps } from "./types";
import { transformUser } from "./utils";

const api = axios.create({
  baseURL: "https://randomuser.me/api",
});

export const getUsersFromAPI = async (): Promise<UsersDataProps[]> => {
  const SEED = 'Cgen';
  const queryURL = `/?results=300&seed=${SEED}}`;
  const { data: { results } } = await api.get<{ results: UserAPIProps[] }>(queryURL);

  return results.map(transformUser);
};

export default api;
