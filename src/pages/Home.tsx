import { useState, } from "react";
import { useQuery } from 'react-query'
import { useDebounce } from "@uidotdev/usehooks";

import type { Location } from "../types";
import Autocomplete from "../components/Autocomplete/Autocomplete";
import { getLocations, getNearbyLocations } from '../api/fake-api';
import './Home.css'
import LocationDetails from "../components/LocationDetails/LocationDetails";
import NearbyLocations from "../components/NearbyLocations/NearbyLocations";

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const debouncedSearchInput = useDebounce(searchInput, 300);
  const {
    data: locationsData,
    isLoading: isLoadingLocations,
    isError: isErrorLocations,
  } = useQuery({
    queryKey: ['locations', debouncedSearchInput],
    queryFn: () => getLocations(searchInput),
    enabled: searchInput.length > 0,
    retry: false,
  });
  const [locationSelected, setLocationSelected] = useState<Location | undefined>();
  const {
    data: nearbyLocations,
    isLoading: isLoadingNearbyLocations,
    isError: isErrorNearbyLocations,
  } = useQuery({
    queryKey: ['nearby-locations', locationSelected],
    queryFn: () => {
      if (locationSelected) {
        return getNearbyLocations(locationSelected.id);
      }
    },
    enabled: !!locationSelected,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleClickItem = (location: Location) => {
    setSearchInput(location.name);
    setLocationSelected(location);
  };

  return (
    <div className="home">
      <div className="home__location-search">
        <Autocomplete
          label="Location"
          placeholder="Search for a location..."
          value={searchInput}
          onChange={handleChange}
          isLoading={isLoadingLocations}
          isError={isErrorLocations}
          items={locationsData}
          onClickItem={handleClickItem}
          renderItem={((location: Location) => location.name)}
        />
      </div>
      <div className="home__location-result">
        {locationSelected && (
          <>
            <LocationDetails location={locationSelected} />
            <NearbyLocations
              locations={nearbyLocations}
              onClickLocation={(location) => setLocationSelected(location)}
              isLoading={isLoadingNearbyLocations}
              isError={isErrorNearbyLocations}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
