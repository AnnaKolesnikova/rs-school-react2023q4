import { useState } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import SearchSection from '../SearchSection/SearchSection';

const SEARCH_TERM_NAME = 'SearchTermName';
const savedTerm = localStorage.getItem(SEARCH_TERM_NAME);

export default function Search() {
  const [searchTerm, setSearchTerm] = useState(savedTerm ? savedTerm : '');

  const updateSearchTerm = (value: string) => {
    const newValue = value.trim();

    if (searchTerm !== newValue) {
      setSearchTerm(newValue);
      localStorage.setItem(SEARCH_TERM_NAME, newValue);
    }
  };

  return (
    <>
      <SearchSection
        searchTerm={searchTerm}
        updateSearchTerm={updateSearchTerm}
      />
      <SearchResults searchTerm={searchTerm} />
    </>
  );
}
