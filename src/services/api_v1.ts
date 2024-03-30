import axios, { AxiosError } from "axios";
import { ScientistAPI, Scientist } from "./types";
import { transformScientist } from "./utils";

// First version of the API, which keeps the data set consistent, but doesn't utilize the filtering capabilities
export const getScientistsFromAPI = async (): Promise<Scientist[]> => {
  try {
    const queryURL = "https://randomuser.me/api/?results=150&seed=Cgen";
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

