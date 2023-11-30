import { createContext, useEffect, useState } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import SearchResults from '../../components/SearchResults/SearchResults';
import SearchSection from '../../components/SearchSection/SearchSection';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { ICharacter } from '../../types/types';
import LoadData from '../../api/LoadData';
import { RootState } from '../../state/store';
import { useSelector } from 'react-redux';

interface Context {
  page: number;
  itemData: ICharacter[] | null;
}

const defaultContext: Context = {
  page: 1,
  itemData: null,
};

export const HomePageContext = createContext<Context>(defaultContext);

export default function Home() {
  const searchWord = useSelector((state: RootState) => state.searchWord.value);
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

  const context = {
    searchWord,
    page: Number(page_id || 1),
    itemData,
  };

  return (
    <ErrorBoundary>
      {loading ? <div className="loading">Loading....</div> : null}
      <HomePageContext.Provider value={context}>
        <SearchSection />
        <SearchResults />
        <Outlet />
      </HomePageContext.Provider>
    </ErrorBoundary>
  );
}
