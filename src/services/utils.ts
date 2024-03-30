import { ScientistAPI, Scientist } from "./types";
import { format, parseISO } from "date-fns";
import he from "date-fns/locale/he";

export const transformScientist = (scientists: ScientistAPI): Scientist => {
  function formatDate(date: string) {
    const formattedDate = format(parseISO(date), "dd/MM/yyyy", {
      locale: he,
    });
    return formattedDate;
  }

  const {
    name,
    location,
    email,
    gender,
    login,
    dob,
    phone,
    cell,
    nat,
    picture,
  } = scientists;

  return {
    name: {
      first: name.first,
      last: name.last,
    },
    location: {
      street: `${location.street.name} ${location.street.number}`,
      city: location.city,
      country: location.country,
    },
    email: email,
    gender: gender,
    login: {
      id: login.uuid,
      username: login.username,
    },
    dob: {
      date: formatDate(dob.date),
      age: `${dob.age}`,
    },
    phone: phone,
    cell: cell,
    nat: nat,
    picture: {
      large: picture.large,
    },
  };
};
