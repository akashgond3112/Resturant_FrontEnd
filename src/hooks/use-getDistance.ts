// Import React hooks
import { useEffect, useState } from "react";

// Define custom React hook named `useGetDistance`
export const useGetDistance = (lat2: number, lon2: number, unit: string) => {
  // Define state variable `distance` and function to update it `setDistance`
  const [distance, setDistance] = useState<number>(0);

  // Declare variables `lat1` and `lon1` and initialize them with 0
  var lat1: number = 0;
  var lon1: number = 0;

  // Declare function to update `lat1` and `lon1` with the current location
  function onPositionUpdate(position: {
    coords: { latitude: any; longitude: any };
  }) {
    lat1 = position.coords.latitude;
    lon1 = position.coords.longitude;
  }

  // Get the current position using the browser's geolocation API
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(onPositionUpdate);
  else alert("navigator.geolocation is not available");

  // Calculate the distance whenever `lat1`, `lat2`, `lon1`, `lon2`, or `unit` change
  useEffect(() => {
    // If the two coordinates are the same, set the distance to 0
    if (lat1 === lat2 && lon1 === lon2) {
      setDistance(0);
    } else {
      // Calculate the distance using the Haversine formula
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;

      // Convert the distance to kilometers if `unit` is "K"
      if (unit === "K") {
        dist = dist * 1.609344;
      }

      // Convert the distance to nautical miles if `unit` is "N"
      if (unit === "N") {
        dist = dist * 0.8684;
      }

      // Update the `distance` state variable with the calculated value
      setDistance(dist);
    }
  }, [lat1, lat2, lon1, lon2, unit]);

  // Return the `distance` state variable
  return distance;
};
