import { Component } from 'react';
import { IPerson } from '../../types/types';
import './PersonCard.scss';

class PersonCard extends Component<IPerson> {
  render() {
    const { name, gender, birth_year, eye_color } = this.props;
    return (
      <div className="person-card">
        <div className="person-name">{name}</div>
        <div className="person-details">
          <ul>
            <li>Gender: {gender}</li>
            <li>Birth year: {birth_year}</li>
            <li>Eye color: {eye_color}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PersonCard;
