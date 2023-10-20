import { useState, useEffect, useRef } from "react";
import { useQuery } from 'react-query'

import type { Location } from "../types";
import Autocomplete from "../components/Autocomplete/Autocomplete";
import { getLocations, getNearbyLocations } from '../api/fake-api';
import './Home.css'
import LocationDetails from "../components/LocationDetails/LocationDetails";

const Home = () => {
  const [locationsData, setLocationsData] = useState<Location[]>();
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const debounceTimer = useRef<NodeJS.Timeout | undefined>()
  const [locationSelected, setLocationSelected] = useState<Location | undefined>();

  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    if (searchInput === '') {
      return
    }

    debounceTimer.current = setTimeout(() => {
      setIsLoading(true);
      // TODO should handle proper abort when user types another search when the previous call didn't finished
      getLocations(searchInput)
        .then((response) => {
          setIsLoading(false);
          setLocationsData(response)
        })
        .catch(() => {
          setIsLoading(false);
          setIsError(true);
        });
    }, 300);
  }, [searchInput]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }

  const handleClickItem = (location: Location) => {
    setSearchInput(location.name)
    setLocationSelected(location)
    getNearbyLocations(location.latitude, location.longitude)
  }

  return (
    <div className="home">
      <div className="home__location-search">
        <Autocomplete
          label="Location"
          placeholder="Search for a location..."
          value={searchInput}
          onChange={handleChange}
          isError={isError}
          isLoading={isLoading}
          items={locationsData}
          onClickItem={handleClickItem}
          renderItem={((location: Location) => location.name)}
        />
      </div>
      <div className="home__location-result">
        {locationSelected && (
          <LocationDetails location={locationSelected} />
        )}
      </div>
    </div>
  );
};

export default Home;
