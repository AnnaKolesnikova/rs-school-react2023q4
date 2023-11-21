import imageSrc from '../../assets/summer_not_found.png';
import './NotFound.scss';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-heading">
        <h4>Sorry! We cannot find any characters...</h4>
      </div>
      <div className="not_found_img">
        <img src={imageSrc} />
      </div>
    </div>
  );
}
