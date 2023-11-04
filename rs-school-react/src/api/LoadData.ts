import { IPlanet } from '../types/types';

const API_URL = 'https://swapi.dev/api';

const getDataBySearch = (
  searchTerm: string,
  url: string
): Promise<IPlanet[]> => {
  return fetch(`${API_URL}/${url}/search=${searchTerm}`)
    .then((response) => (response.status === 200 ? response.json() : null))
    .then((data) => (data?.results ? data.results : []));
};

const getAllItems = async (url: string): Promise<IPlanet[]> => {
  let allItems: IPlanet[] = [];

  const response = await fetch(`${API_URL}/${url}`);
  const data = await response.json();

  if (data && data.results) {
    allItems = [...allItems, ...data.results];
  }

  return allItems;
};

export const getData = (searchTerm = '', url: string): Promise<IPlanet[]> => {
  return searchTerm ? getDataBySearch(searchTerm, url) : getAllItems(url);
};
