import type { Location } from '../../types'

type Props = {
  location: Location,
}

const LocationDetails = ({ location }: Props) => {
  return (
    <div className="location-details">
      <h2>{location.name}</h2>
      <p>{location.description}</p>
      <p><strong>Country: </strong>{location.country}</p>
      <p><strong>Climate: </strong>{location.climate}</p>
      <p><strong>Currency: </strong>{location.currency}</p>
    </div>
  );
};

export default LocationDetails;
