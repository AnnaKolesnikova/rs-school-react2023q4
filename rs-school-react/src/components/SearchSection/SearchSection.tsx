import { FormEvent } from 'react';
import './SearchSection.scss';

interface Props {
  searchTerm: string;
  updateSearchTerm: (value: string) => void;
}

export default function SearchSection({ searchTerm, updateSearchTerm }: Props) {
  const SEARCH_INPUT = 'searchInput';
  const searchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchInput = event.currentTarget.elements.namedItem(SEARCH_INPUT);

    if (searchInput instanceof HTMLInputElement) {
      searchInput.value = searchInput.value.trim();
      updateSearchTerm(searchInput.value);
    }
  };

  return (
    <form className="search-container" onSubmit={searchSubmit}>
      <input
        type="text"
        name={SEARCH_INPUT}
        placeholder="Type smth..."
        className="search-input"
        defaultValue={searchTerm}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}
