import { IPlanet } from '../../types/types';
import './ItemCard.scss';

export default function ItemCard({
  name,
  climate,
  rotation_period,
  orbital_period,
}: IPlanet) {
  return (
    <div className="item-card">
      <h5 className="item-name">{name}</h5>
      <div>
        <img src="https://" alt="" />
      </div>
      <div className="item-details">
        <ul>
          <li>Climate: {climate}</li>
          <li>rotation_period: {rotation_period}</li>
          <li>Orbital period: {orbital_period}</li>
        </ul>
      </div>
    </div>
  );
}
