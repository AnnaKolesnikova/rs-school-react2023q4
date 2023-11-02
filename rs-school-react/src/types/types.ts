import { ReactNode } from 'react';

export interface IProps {
  children?: ReactNode;
}

export interface IAppProps extends IProps {
  searchTerm: string;
  updateSearchTerm: (value: string) => void;
}

export interface IResponse {
  count: number;
  next: string;
  previous: null;
  results: IPerson[];
}

export interface IPerson {
  id: 1;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
}
