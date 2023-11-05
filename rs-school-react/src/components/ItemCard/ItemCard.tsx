import { IPlanet } from '../../types/types';
import './ItemCard.scss';

export default function ItemCard(props: IPlanet) {
  return (
    <div className="item-card">
      <div className="item-name">{props.name}</div>
      <div>
        <img src="https://" alt="" />
      </div>
      <div className="item-details">
        <ul>
          <li>Climate: {props.climate}</li>
          <li>Created: {props.created}</li>
          <li>Orbital period: {props.orbital_period}</li>
        </ul>
      </div>
    </div>
  );
}
