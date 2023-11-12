import { createContext, useEffect, useState } from 'react';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import SearchResults from '../components/SearchResults/SearchResults';
import SearchSection from '../components/SearchSection/SearchSection';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { ICharacter } from '../types/types';
import LoadData from '../api/LoadData';

interface Context {
  searchWord: string;
  page: number;
  updateSearchWord: (val: string) => void;
  itemData: ICharacter[] | null;
}

const defaultContext: Context = {
  searchWord: '',
  page: 1,
  updateSearchWord: () => {},
  itemData: null,
};

export const HomePageContext = createContext<Context>(defaultContext);

export default function Home() {
  const SEARCH_WORD = 'SearchWord';
  const storedSearch = localStorage.getItem(SEARCH_WORD);
  const [searchWord, setSearchWord] = useState(
    storedSearch ? storedSearch : ''
  );
  const [itemData, setItemData] = useState<ICharacter[] | null>(null);
  const [loading, setLoading] = useState(false);
  const { page_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!page_id || !Number(page_id)) navigate('/page/1', { replace: true });

    const loader = new LoadData();
    const page = Number(page_id || 1);

    const dataLoading = async (
      searchWord: string,
      page: number | undefined
    ) => {
      try {
        const data = await loader.getData(searchWord, page);

        setTimeout(() => {
          setItemData(data);
          setLoading(false);
        }, 250);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    setLoading(true);
    dataLoading(searchWord, page);
  }, [page_id, navigate, searchWord]);

  const updateSearchWord = (value: string) => {
    const newValue = value.trim();

    if (searchWord !== newValue) {
      setSearchWord(newValue);
      localStorage.setItem(SEARCH_WORD, newValue);
    }
  };

  const context = {
    searchWord,
    page: Number(page_id || 1),
    updateSearchWord,
    itemData,
  };

  return (
    <ErrorBoundary>
      {loading ? <div className="loading">Loading....</div> : null}
      <HomePageContext.Provider value={context}>
        <SearchSection
          searchWord={searchWord}
          updateSearchWord={updateSearchWord}
        />
        <SearchResults searchWord={searchWord} page={Number(page_id || 1)} />
        <Outlet />
      </HomePageContext.Provider>
    </ErrorBoundary>
  );
}
