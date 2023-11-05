import { IPlanet } from '../types/types';

const API_URL = 'https://swapi.dev/api/planets';

const getDataBySearch = (searchWord: string, page = 1): Promise<IPlanet[]> => {
  return fetch(`${API_URL}/?page=${page}&search=${searchWord}`)
    .then((response) => (response.status === 200 ? response.json() : null))
    .then((data) => (data?.results ? data.results : []));
};

const getAllItems = async (): Promise<IPlanet[]> => {
  let allItems: IPlanet[] = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const response = await fetch(`${API_URL}/?page=${page}`);
    const data = await response.json();

    if (data && data.results) {
      allItems = [...allItems, ...data.results];
      totalPages = 5;
    }
    page++;
  }
  return allItems;
};

export const getData = (searchWord = '', page = 1): Promise<IPlanet[]> => {
  return searchWord ? getDataBySearch(searchWord, page) : getAllItems();
};
