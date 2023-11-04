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
  results: IPlanet[];
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

export interface IPlanet {
  id: 1;
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

export interface IStarship {
  id: 1;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: Array<string>;
  films: Array<string>;
  created: string;
  edited: string;
  url: string;
}
