import { useEffect, useState } from 'react';
import './SearchResults.scss';
import { getData } from '../../api/LoadData';
import { IAppProps, IPerson } from '../../types/types';
import NotFound from '../NotFound/NotFound';
import PersonCard from '../PersonCard/PersonCard';

type Props = Pick<IAppProps, 'searchTerm'>;

export default function SearchResults(props: Props) {
  const [personData, setPersonData] = useState<IPerson[] | null>(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    loadData(props.searchTerm);
    return () => setLoad(true);
  }, [props.searchTerm]);

  const loadData = async (searchTerm: string) => {
    try {
      const data = await getData(searchTerm);
      console.log('data', data);
      setTimeout(() => {
        setPersonData(data);
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
        {personData !== null ? (
          personData.length ? (
            personData.map((person: IPerson) => (
              <PersonCard key={person.name} {...person}></PersonCard>
            ))
          ) : (
            <NotFound></NotFound>
          )
        ) : null}
      </div>
    </>
  );
}
