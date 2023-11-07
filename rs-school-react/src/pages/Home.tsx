import { useEffect, useState } from 'react';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import SearchResults from '../components/SearchResults/SearchResults';
import SearchSection from '../components/SearchSection/SearchSection';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

export default function Home() {
  const SEARCH_WORD = 'SearchWord';
  const storedSearch = localStorage.getItem(SEARCH_WORD);
  const [searchWord, setSearchWord] = useState(
    storedSearch ? storedSearch : ''
  );
  const { page_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!page_id || !Number(page_id)) navigate('/page/1', { replace: true });
  }, [page_id, navigate]);

  const updateSearchWord = (value: string) => {
    const newValue = value.trim();

    if (searchWord !== newValue) {
      setSearchWord(newValue);
      localStorage.setItem(SEARCH_WORD, newValue);
    }
  };
  return (
    <ErrorBoundary>
      <SearchSection
        searchWord={searchWord}
        updateSearchWord={updateSearchWord}
      />
      <SearchResults searchWord={searchWord} page={+(page_id || 1)} />
      <Outlet />
    </ErrorBoundary>
  );
}
