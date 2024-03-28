import { UserAPIProps, UsersDataProps } from "./types";
import { format , parseISO} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

function formatDate(date: string){
  const formattedDate = format(parseISO(date), 'dd/MM/yyyy', {locale: ptBR});
  return formattedDate;
}
export const capitalizeText = (text: string) => {
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const transformUser = (user: UserAPIProps): UsersDataProps => {
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
  } = user;
  
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