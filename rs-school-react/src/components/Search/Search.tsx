import { Component, FormEvent } from 'react';
import './Search.scss';
import { IAppProps } from '../../types/types';

const SEARCH_INPUT = 'searchInput';

class Search extends Component<IAppProps> {
  searchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchInput = event.currentTarget.elements.namedItem(SEARCH_INPUT);

    if (searchInput instanceof HTMLInputElement) {
      searchInput.value = searchInput.value.trim();
      this.props.updateSearchTerm(searchInput.value);
    }
  };

  render() {
    return (
      <form className="search-container" onSubmit={this.searchSubmit}>
        <input
          type="text"
          name={SEARCH_INPUT}
          placeholder="Type smth..."
          className="search-input"
          defaultValue={this.props.searchTerm}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
