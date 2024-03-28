import { ReactNode } from "react";

export interface UsersDataProps {
  name: {
    first: string;
    last: string;
  };
  location: {
    street: string;
    city: string;
    country: string;
  };
  email: string;
  gender: string;
  login: {
    username: string;
  };
  dob: {
    date: string;
    age: string;
  };
  phone: string;
  cell: string;
  nat: string;
  picture: {
    large: string;
  };
}

export interface UserAPIProps {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}
