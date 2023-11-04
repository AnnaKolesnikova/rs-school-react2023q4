import { IPlanet } from '../../types/types';
import './ItemCard.scss';

export default function ItemCard(props: IPlanet) {
  return (
    <div className="item-card">
      <div className="item-name">{props.name}</div>
      <div className="item-details">
        <ul>
          <li>{props.climate}</li>
          <li>{props.created}</li>
          <li>{props.orbital_period}</li>
        </ul>
      </div>
    </div>
  );
}
