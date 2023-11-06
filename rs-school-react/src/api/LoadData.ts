import { ICharacter } from '../types/types';

const API_URL = 'https://swapi.dev/api/people';

class LoadData {
  getDataBySearch = (searchWord: string, page = 1): Promise<ICharacter[]> => {
    return fetch(`${API_URL}/?page=${page}&search=${searchWord}`)
      .then((response) => (response.status === 200 ? response.json() : null))
      .then((data) => (data?.results ? data.results : []));
  };

  async getAllItems(): Promise<ICharacter[]> {
    let allItems: ICharacter[] = [];
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
  }

  getItemId(url: string): string | null {
    const idRegExp = /\/([0-9]*)\/$/;
    const matches = url.match(idRegExp);
    return matches && matches.length ? matches[1] : null;
  }

  getData(searchWord = '', page = 1): Promise<ICharacter[]> {
    return searchWord
      ? this.getDataBySearch(searchWord, page)
      : this.getAllItems();
  }
}

export default LoadData;
