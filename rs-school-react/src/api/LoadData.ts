import { IPerson } from '../types/types';

class LoadData {
  API_URL = 'https://swapi.dev/api/people';

  getData(searchTerm = ''): Promise<IPerson[]> {
    return searchTerm ? this.getDataBySearch(searchTerm) : this.getAllData();
  }

  private getDataBySearch(searchTerm: string): Promise<IPerson[]> {
    return fetch(`${this.API_URL}/?search=${searchTerm}`)
      .then((response) => (response.status === 200 ? response.json() : null))
      .then((data) => (data?.results ? data.results : []));
  }

  async getAllData(): Promise<IPerson[]> {
    let allPersons: IPerson[] = [];

    const response = await fetch(this.API_URL);
    const data = await response.json();

    if (data && data.results) {
      allPersons = [...allPersons, ...data.results];
    }

    return allPersons;
  }
}

export default LoadData;
