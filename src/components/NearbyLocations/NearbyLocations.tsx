import type { Location } from "../../types";
import "./NearbyLocations.css";

type Props = {
  locations?: Location[];
  onClickLocation: (location: Location) => any;
  isLoading?: boolean;
  isError?: boolean;
};

const NearbyLocations = ({
  locations,
  onClickLocation,
  isLoading,
  isError,
}: Props) => {
  const showResults =
    !isError && (!isLoading || (locations && locations.length >= 0));

  return (
    <div className="nearby-locations">
      <p>
        <strong>Nearby Locations</strong>
      </p>
      {showResults &&
        locations?.map((location) => (
          <button
            key={location.id}
            className="nearby-locations__button"
            type="button"
            onClick={() => onClickLocation(location)}
          >
            {location.name}
          </button>
        ))}
      {isLoading && <p>Loading...</p>}
      {!isLoading && isError && (
        <p className="nearby-locations__error">Something went wrong</p>
      )}
      {!isLoading && locations && locations.length === 0 && (
        <p>No nearby locations found</p>
      )}
    </div>
  );
};

export default NearbyLocations;
