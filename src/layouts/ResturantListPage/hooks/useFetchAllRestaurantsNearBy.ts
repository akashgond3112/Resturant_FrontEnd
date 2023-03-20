import { useEffect, useState } from "react";
import ResturantModal from "../../../models/Resturant/ResturantModel";

export const useFetchAllRestaurantsNearBy = (
  lat: number,
  lng: number,
  nextPageToken: string
) => {
  const [resturants, setResturants] = useState<ResturantModal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [tmpNextPageToken, setTmpNextPageToken] = useState("");
  const [endOfPage, setEndOfPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHttpError(null);

    const fetchNearByResturants = async () => {

      if (lat === 0 && lng === 0) {
        return;
      }

      let url: string = "";

      // url = `${process.env.REACT_APP_BASE_URL}/api/v1/restaurants?lat=${lat}&lng=${lng}&query=restaurants&radius=2000`;

      if (!hasNextPage) {
        url = `${process.env.REACT_APP_BASE_URL}/api/v1/restaurants?lat=${lat}&lng=${lng}&query=restaurants&radius=2000`;
      } else {
        url = `${process.env.REACT_APP_BASE_URL}/api/v1/restaurants?pageToken=${nextPageToken}`;
      }

      const response = await fetch(url);

      if (response.status === 500) {
      }

      const responseJson = await response.json();

      const responseData = responseJson.results;

      const loadedResturants: ResturantModal[] = [];

      for (const key in responseData) {
        loadedResturants.push({
          name: responseData[key].name,
          opening_hours: responseData[key].opening_hours,
          photos: responseData[key].photos,
          place_id: responseData[key].place_id,
          rating: responseData[key].rating,
          user_ratings_total: responseData[key].user_ratings_total,
          formatted_address: responseData[key].formatted_address,
          price_level: responseData[key].price_level,
          business_status: responseData[key].business_status,
          geometry: responseData[key].geometry,
          icon: responseData[key].icon,
          icon_background_color: responseData[key].icon_background_color,
          icon_mask_base_uri: responseData[key].icon_mask_base_uri,
          plus_code: responseData[key].plus_code,
          reference: responseData[key].reference,
          types: responseData[key].types,
        });
      }

      setResturants((prev) => [...prev, ...loadedResturants]);
      setIsLoading(false);

      if (
        responseJson.next_page_token !== "" &&
        responseJson.next_page_token !== undefined
      ) {
        setTmpNextPageToken(responseJson.next_page_token);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
        setTmpNextPageToken("");
        setEndOfPage(true);
      }
    };

    fetchNearByResturants().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [lat, lng, nextPageToken]);

  return {
    resturants,
    isLoading,
    httpError,
    hasNextPage,
    tmpNextPageToken,
    endOfPage,
  };
};
