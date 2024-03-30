import axios, { AxiosError } from "axios";
import { ScientistAPI, Scientist } from "./types";
import { transformScientist } from "./utils";

// Second version of the API, which utilizies the filtering capabilities, but lacks in data consistency.
export const getScientistsFromAPI = async (gender: string = "all", nats: string[] = ["all"]): Promise<Scientist[]> => {
  try {
    const queryURL = `https://randomuser.me/api/?results=150&seed=Cgen&gender=${gender}&nat=${nats.join(',')}`;
    const {
      data: { results },
    } = await axios.get<{ results: ScientistAPI[] }>(queryURL);

    return results.map(transformScientist);
  } catch (error) {
    const axiosError = error as AxiosError;

    return Promise.reject({
      message:
        axiosError.response?.data ||
        "Uh oh, something has gone wrong. Try again in another time.",
    });
  }
};
