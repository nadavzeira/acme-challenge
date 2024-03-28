import axios from "axios";
import { UserAPIProps, UsersDataProps } from "./types";
import { transformUser } from "./utils";

const api = axios.create({
  baseURL: "https://randomuser.me/api/",
});

export const getUsersFromAPI = async (): Promise<UsersDataProps[]> => {
  const seed = 'Cgen';
  const { data: { results } } = await api.get<{ results: UserAPIProps[] }>(`/?seed=${seed}&results=25`);

  console.log(results);
  
  return results.map(transformUser);
};

export default api;
