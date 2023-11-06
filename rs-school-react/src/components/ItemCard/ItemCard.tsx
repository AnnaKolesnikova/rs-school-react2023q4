import LoadData from '../../api/LoadData';
import { ICharacter } from '../../types/types';
import './ItemCard.scss';

export default function ItemCard({
  name,
  birth_year,
  gender,
  eye_color,
  url,
}: ICharacter) {
  const loader = new LoadData();
  const id = loader.getItemId(url);

  return (
    <div className="item-card">
      <h5 className="item-name">{name}</h5>
      <div className="item-container">
        <div className="item-img">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          />
        </div>
        <div className="item-details">
          <ul>
            <li>Birth year: {birth_year}</li>
            <li>Gender: {gender}</li>
            <li>Homeworld: {eye_color}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
