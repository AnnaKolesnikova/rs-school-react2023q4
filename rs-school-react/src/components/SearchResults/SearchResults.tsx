import { useEffect, useState } from 'react';
import './SearchResults.scss';
import LoadData from '../../api/LoadData';
import { ICharacter } from '../../types/types';
import NotFound from '../NotFound/NotFound';
import ItemCard from '../ItemCard/ItemCard';
import { Link, NavLink } from 'react-router-dom';

interface Props {
  searchWord: string;
  page: number;
}

export default function SearchResults({ searchWord }: Props) {
  const [itemData, setItemData] = useState<ICharacter[] | null>(null);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const records = itemData?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(itemData ? itemData.length / itemsPerPage : 1);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    const loader = new LoadData();

    const loadData = async (searchWord: string) => {
      try {
        const data = await loader.getData(searchWord);
        setTimeout(() => {
          setItemData(data);
          setLoading(false);
        }, 200);
      } catch (err) {
        console.log(err);
      }
    };

    loadData(searchWord);
    return () => setLoading(true);
  }, [searchWord]);

  function changeCurrentPage(id: number) {
    setCurrentPage(id);
  }

  return (
    <>
      {loading ? <div className="loading">Loading....</div> : null}
      <nav>
        <ul className="pagination">
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? 'active' : ''}`}
              key={i}
            >
              <Link
                to={`/page/${n}`}
                className="page-link"
                onClick={() => changeCurrentPage(n)}
              >
                {n}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="items-list">
        {records !== null ? (
          records?.length ? (
            records?.map((character: ICharacter) => (
              <NavLink key={character.id} to={`./details/${character.id}`}>
                <ItemCard {...character}></ItemCard>
              </NavLink>
            ))
          ) : (
            <NotFound></NotFound>
          )
        ) : null}
      </div>
    </>
  );
}
