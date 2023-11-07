import { ICharacter } from '../types/types';

const API_URL = 'https://rickandmortyapi.com/api/character';

class LoadData {
  getDataBySearch = (searchWord: string, page = 1): Promise<ICharacter[]> => {
    return fetch(`${API_URL}/?page=${page}&search=${searchWord}`)
      .then((response) => (response.status === 200 ? response.json() : null))
      .then((data) => (data?.results ? data.results : []));
  };

  async getAllItems(): Promise<ICharacter[]> {
    try {
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
    } catch (err) {
      throw new Error(`Fetching all items error: ${err}`);
    }
  }

  async getItemByID(id: string): Promise<ICharacter> {
    try {
      const response = await fetch(`${API_URL}/${id}/`);
      return response.json();
    } catch (err) {
      throw new Error(`Fetching item by id error: ${err}`);
    }
  }

  getData(searchWord = '', page = 1): Promise<ICharacter[]> {
    return searchWord
      ? this.getDataBySearch(searchWord, page)
      : this.getAllItems();
  }
}

export default LoadData;
