import { FormEvent } from 'react';
import './SearchSection.scss';

interface Props {
  searchWord: string;
  updateSearchWord: (value: string) => void;
}

export default function SearchSection({ searchWord, updateSearchWord }: Props) {
  const SEARCH_INPUT = 'searchInput';
  const searchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchInput = event.currentTarget.elements.namedItem(SEARCH_INPUT);

    if (searchInput instanceof HTMLInputElement) {
      searchInput.value = searchInput.value.trim();
      updateSearchWord(searchInput.value);
    }
  };

  return (
    <>
      <h3>Find your favorite character</h3>
      <form className="search-container" onSubmit={searchSubmit}>
        <input
          type="text"
          name={SEARCH_INPUT}
          placeholder="Type here..."
          className="search-input"
          defaultValue={searchWord}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </>
  );
}
