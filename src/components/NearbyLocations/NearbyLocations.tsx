import type { Location } from '../../types'
import "./LocationDetails.css";

type Props = {
  locations?: Location[],
};

const NearbyLocations = ({ locations }: Props) => {
  return (
    <div className="nearby-locations">
      <h2>Nearby Locations</h2>
      {locations?.map((location => (
        <span key={location.id}>{location.name}</span>
      )))}
    </div>
  );
};

export default NearbyLocations;
