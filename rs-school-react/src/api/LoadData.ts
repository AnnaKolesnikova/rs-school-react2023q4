import { IPerson } from '../types/types';

const API_URL = 'https://swapi.dev/api/people';

const getDataBySearch = (searchTerm: string): Promise<IPerson[]> => {
  return fetch(`${API_URL}/?search=${searchTerm}`)
    .then((response) => (response.status === 200 ? response.json() : null))
    .then((data) => (data?.results ? data.results : []));
};

const getAllData = async (): Promise<IPerson[]> => {
  let allPersons: IPerson[] = [];

  const response = await fetch(API_URL);
  const data = await response.json();

  if (data && data.results) {
    allPersons = [...allPersons, ...data.results];
  }

  return allPersons;
};

export const getData = (searchTerm = ''): Promise<IPerson[]> => {
  return searchTerm ? getDataBySearch(searchTerm) : getAllData();
};
