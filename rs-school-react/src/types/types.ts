import { ReactNode } from 'react';

export interface IProps {
  children?: ReactNode;
}

export interface IResponse {
  count: number;
  next: string;
  previous: null;
  results: IPlanet[];
}

export interface IPlanet {
  id: number;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diamete: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: Array<string>;
  films: Array<string>;
  created: string;
  edited: string;
  url: string;
}
