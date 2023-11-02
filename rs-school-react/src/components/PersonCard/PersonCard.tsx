import { IPerson } from '../../types/types';
import './PersonCard.scss';

export default function PersonCard(props: IPerson) {
  return (
    <div className="person-card">
      <div className="person-name">{props.name}</div>
      <div className="person-details">
        <ul>
          <li>Gender: {props.gender}</li>
          <li>Birth year: {props.birth_year}</li>
          <li>Eye color: {props.eye_color}</li>
        </ul>
      </div>
    </div>
  );
}
