import { useContext, useState } from 'react';
import './SearchResults.scss';
import { ICharacter } from '../../types/types';
import NotFound from '../NotFound/NotFound';
import ItemCard from '../ItemCard/ItemCard';
import { Link, NavLink } from 'react-router-dom';
import { HomePageContext } from '../../pages/HomePage/Home';

export default function SearchResults() {
  const { itemData } = useContext(HomePageContext);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const records = itemData?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(itemData ? itemData.length / itemsPerPage : 1);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function changeCurrentPage(id: number) {
    setCurrentPage(id);
  }

  return (
    <>
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
      <div className="items-list" data-testid="items-list">
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
