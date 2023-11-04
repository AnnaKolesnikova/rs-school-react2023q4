import { FormEvent } from 'react';
import './SearchSection.scss';
import { IAppProps } from '../../types/types';

export default function SearchSection(props: IAppProps) {
  const SEARCH_INPUT = 'searchInput';
  const searchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchInput = event.currentTarget.elements.namedItem(SEARCH_INPUT);

    if (searchInput instanceof HTMLInputElement) {
      searchInput.value = searchInput.value.trim();
      props.updateSearchTerm(searchInput.value);
    }
  };

  return (
    <form className="search-container" onSubmit={searchSubmit}>
      <input
        type="text"
        name={SEARCH_INPUT}
        placeholder="Type smth..."
        className="search-input"
        defaultValue={props.searchTerm}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}
