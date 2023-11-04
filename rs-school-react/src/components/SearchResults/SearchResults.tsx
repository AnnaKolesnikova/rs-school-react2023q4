import { useEffect, useState } from 'react';
import './SearchResults.scss';
import { getData } from '../../api/LoadData';
import { IAppProps, IPlanet } from '../../types/types';
import NotFound from '../NotFound/NotFound';
import ItemCard from '../ItemCard/ItemCard';

type Props = Pick<IAppProps, 'searchTerm'>;

export default function SearchResults(props: Props) {
  const [itemData, setItemData] = useState<IPlanet[] | null>(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    loadData(props.searchTerm);
    return () => setLoad(true);
  }, [props.searchTerm]);

  const loadData = async (searchTerm: string) => {
    try {
      const data = await getData(searchTerm, '/planets');
      console.log('data', data);
      setTimeout(() => {
        setItemData(data);
        setLoad(false);
      }, 200);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {load ? <div className="loading">Loading....</div> : null}
      <div className="persons-list">
        {itemData !== null ? (
          itemData.length ? (
            itemData.map((planet: IPlanet) => (
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
