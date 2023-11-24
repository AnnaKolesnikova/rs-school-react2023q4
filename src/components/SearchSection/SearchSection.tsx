import { FormEvent } from 'react';
import './SearchSection.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { updateSearchWord } from '../../state/search';

export default function SearchSection() {
  const SEARCH_INPUT = 'searchInput';
  const searchWord = useSelector((state: RootState) => state.searchWord.value);
  const dispatch = useDispatch();

  const searchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchInput = event.currentTarget.elements.namedItem(SEARCH_INPUT);

    if (searchInput instanceof HTMLInputElement) {
      searchInput.value = searchInput.value.trim();
      dispatch(updateSearchWord(searchInput.value));
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
          data-testid="search-input"
        />
        <button
          type="submit"
          className="search-button"
          data-testid="submit-btn"
        >
          Search
        </button>
      </form>
    </>
  );
}
