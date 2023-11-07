import { ICharacter } from '../../types/types';
import './ItemCard.scss';

export default function ItemCard({ name, image }: ICharacter) {
  return (
    <div className="item-card">
      <h5 className="item-name">{name}</h5>
      <div className="item-container">
        <div className="item-img">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}
