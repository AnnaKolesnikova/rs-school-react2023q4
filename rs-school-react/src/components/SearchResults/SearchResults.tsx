import { useEffect, useState } from 'react';
import './SearchResults.scss';
import { getData } from '../../api/LoadData';
import { IPlanet } from '../../types/types';
import NotFound from '../NotFound/NotFound';
import ItemCard from '../ItemCard/ItemCard';

interface Props {
  searchTerm: string;
}

export default function SearchResults({ searchTerm }: Props) {
  const [itemData, setItemData] = useState<IPlanet[] | null>(null);
  const [load, setLoad] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const records = itemData?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(itemData ? itemData.length / itemsPerPage : 1);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    loadData(searchTerm);
    return () => setLoad(true);
  }, [searchTerm]);

  const loadData = async (searchTerm: string) => {
    try {
      const data = await getData(searchTerm);
      setTimeout(() => {
        setItemData(data);
        setLoad(false);
      }, 200);
    } catch (err) {
      console.log(err);
    }
  };

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCurrentPage(id: number) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <>
      {load ? <div className="loading">Loading....</div> : null}
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prevPage}>
              Prev.
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? 'active' : ''}`}
              key={i}
            >
              <a
                href="#"
                className="page-link"
                onClick={() => changeCurrentPage(n)}
              >
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
      <div className="items-list">
        {records !== null ? (
          records?.length ? (
            records?.map((planet: IPlanet) => (
              <ItemCard key={planet.name} {...planet}></ItemCard>
            ))
          ) : (
            <NotFound></NotFound>
          )
        ) : null}
      </div>
    </>
  );
}
