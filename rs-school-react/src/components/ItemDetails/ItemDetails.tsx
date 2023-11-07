import { useNavigate, useParams } from 'react-router-dom';
import { ICharacter } from '../../types/types';
import './ItemDetails.scss';
import { useEffect, useState } from 'react';
import LoadData from '../../api/LoadData';

type Data = ICharacter | null;

export default function ItemDetails() {
  const { item_id } = useParams();
  const [itemData, setItemData] = useState<Data>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = new LoadData();

    const dataToLoad = async (id: string) => {
      try {
        const itemData = await loadData.getItemByID(id);

        setTimeout(() => {
          setItemData(itemData);
          setLoading(false);
        }, 250);
      } catch (err) {
        console.log(err);
      }
    };
    setLoading(true);
    dataToLoad(item_id || '');
  }, [item_id]);

  const closeDetails = () => {
    navigate('..');
  };

  return (
    <>
      {loading ? <div className="loading">Loading....</div> : null}
      {itemData !== null ? (
        <div className="item-details">
          <div onClick={closeDetails}></div>
          <div className="details-container">
            <button className="close-button" onClick={closeDetails}>
              X
            </button>
            <div className="details-img">
              <img src={itemData.image} />
            </div>
            <div className="details-list">
              <h4>{itemData.name}</h4>
              <ul>
                <li>Status: {itemData.status}</li>
                <li>Species: {itemData.species}</li>
                <li>Gender: {itemData.gender}</li>
                <li>Origin: {itemData.origin.name}</li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
