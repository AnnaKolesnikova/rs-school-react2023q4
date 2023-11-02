import { useState } from 'react';
import './App.scss';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const SEARCH_TERM_NAME = 'SearchTermName';
const savedTerm = localStorage.getItem(SEARCH_TERM_NAME);

export default function App() {
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
      <ErrorBoundary>
        <Search searchTerm={searchTerm} updateSearchTerm={updateSearchTerm} />
        <SearchResults searchTerm={searchTerm} />
      </ErrorBoundary>
    </>
  );
}
