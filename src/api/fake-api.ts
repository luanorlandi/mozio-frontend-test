import type { Location } from "../types";
import locationsData from './locationsData'

export async function getLocations(searchInput: string): Promise<Location[]> {
  console.log('getLocations args', { searchInput });

  if (searchInput === 'fail') {
    throw Error('Error');
  };

  const filteredResults = locationsData.filter((location: Location) => {
    return location.name.toLowerCase().includes(searchInput.toLowerCase())
  });

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(filteredResults)
    }, 500);
  })

  // for quick testing purpose of the UI (not to be committed in a real scenario)
  // return Promise.resolve([{
  //   "id": 1,
  //   "name": "Paris, France",
  //   "description": "The City of Light, known for its iconic Eiffel Tower and world-class cuisine.",
  //   "country": "France",
  //   "climate": "Mild",
  //   "currency": "Euro",
  //   "latitude": 48.8566,
  //   "longitude": 2.3522
  // },
  // {
  //   "id": 2,
  //   "name": "Rome, Italy",
  //   "description": "The Eternal City, home to ancient ruins like the Colosseum and Roman Forum.",
  //   "country": "Italy",
  //   "climate": "Mediterranean",
  //   "currency": "Euro",
  //   "latitude": 41.9028,
  //   "longitude": 12.4964
  // }])
};

export async function getNearbyLocations(locationId: number): Promise<Location[]> {
  console.log('getNearbyLocations args', { locationId });

  const locationTarget = locationsData.find((location) => locationId === location.id);
  if (!locationTarget) {
    // for improvement, this edge case should be an response error
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([])
      }, 500)
    })
  };

  const { latitude, longitude } = locationTarget;
  const locationsDataCopy = locationsData.map(location => { return { ...location } });
  locationsDataCopy.sort((a, b) => {
    const distanceA = Math.sqrt(Math.pow(a.latitude - latitude, 2) + Math.pow(a.longitude - longitude, 2));
    const distanceB = Math.sqrt(Math.pow(b.latitude - latitude, 2) + Math.pow(b.longitude - longitude, 2));

    return distanceA - distanceB
  });

  return new Promise(resolve => {
    setTimeout(() => {
      if (locationsDataCopy[0].id === locationId) {
        // skip the location from request param
        resolve(locationsDataCopy.slice(1, 6))
        return;
      }

      // coverage for unexpected edge case
      resolve(locationsDataCopy.slice(0, 5))
    }, 500)
  })
};
