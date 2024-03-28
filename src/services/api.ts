import axios from "axios";
import { UserAPIProps, UsersDataProps } from "./types";
import { transformUser } from "./utils";

const api = axios.create({
  baseURL: "https://randomuser.me/api",
});

export const getUsersFromAPI = async (): Promise<UsersDataProps[]> => {
  const seed = 'Cgen';
  const queryURL = `/?seed=${seed}&results=25`;
  const { data: { results } } = await api.get<{ results: UserAPIProps[] }>(queryURL);

  return results.map(transformUser);
};

export default api;
