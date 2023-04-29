//:::  This routine calculates the distance between two points (given the     :::
//:::  latitude/longitude of those points). It is being used to calculate     :::
//:::  the distance between two locations                                     :::
//:::                                                                         :::
//:::  Definitions:                                                           :::
//:::    South latitudes are negative, east longitudes are positive           :::
//:::                                                                         :::
//:::  Passed to function:                                                    :::
//:::    lat1, lon1 = Latitude and Longitude of point 1 (in decimal degrees)  :::
//:::    lat2, lon2 = Latitude and Longitude of point 2 (in decimal degrees)  :::
//:::    unit = the unit you desire for results                               :::
//:::           where: 'M' is statute miles (default)                         :::
//:::                  'K' is kilometers                                      :::
//:::                  'N' is nautical miles                                  :::

import { useEffect, useState } from "react";

export const useGetDistance = (lat2: number, lon2: number, unit: string) => {
  const [distance, setDistance] = useState<number>(0);
  var lat1: number=0;
  var lon1: number=0;
  function onPositionUpdate(position: {
    coords: { latitude: any; longitude: any };
  }) {
    lat1 = position.coords.latitude;
    lon1 = position.coords.longitude;
  }

  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(onPositionUpdate);
  else alert("navigator.geolocation is not available");

  useEffect(() => {
    if (lat1 === lat2 && lon1 === lon2) {
      setDistance(0);
    } else {
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
      if (unit === "K") {
        // kilomiters
        dist = dist * 1.609344;
      }
      if (unit === "N") {
        dist = dist * 0.8684;
      }
      setDistance(dist);
    }
  }, [lat1, lat2, lon1, lon2, unit]);

  return distance;
};
