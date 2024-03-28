import axios from "axios";
import mockData from "./mock.json";
import { UsersDataProps } from "./types";
import { transformUser } from "./utils";

const api = axios.create({
  baseURL: "https://randomuser.me/api/",
});

export const getUsersFromAPI = async (): Promise<any> => {
  // const { data } = await api.get('');
  // seed: Cgen
  // return data;

  const trasnformed = await mockData.results.map(transformUser);

  console.log(trasnformed);
  
  return trasnformed;
};

export default api;
