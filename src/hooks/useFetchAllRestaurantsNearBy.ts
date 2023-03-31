import { useEffect, useState } from "react";
import Restaurant from "../models/Restaurant/Restaurant";

export const useFetchAllRestaurantsNearBy = (
  lat: number,
  lng: number,
  nextPageToken: string
) => {
  const [resturants, setResturants] = useState<Restaurant[]>([]);
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
        url = `${process.env.REACT_APP_BASE_URL}/api/v1/restaurants?lat=${lat}&lng=${lng}&query=restaurants&radius=2000&pageToken=`;
      } else {
        url = `${process.env.REACT_APP_BASE_URL}/api/v1/restaurants?pageToken=${nextPageToken}`;
      }

      const response = await fetch(url);

      if (response.status === 500) {
      }

      const responseJson = await response.json();

      const responseData = responseJson.results;

      const loadedResturants: Restaurant[] = [];

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
          address_components: [],
          adr_address: "",
          current_opening_hours: {
            open_now: false,
            periods: [],
            weekday_text: []
          },
          delivery: false,
          dine_in: false,
          formatted_phone_number: "",
          international_phone_number: "",
          reservable: false,
          reviews: [],
          serves_beer: false,
          serves_dinner: false,
          serves_wine: false,
          takeout: false,
          url: "",
          utc_offset: 0,
          vicinity: "",
          website: ""
        });
      }

      setResturants((prev) => [...prev, ...loadedResturants]);
      setIsLoading(false);

      if (
        responseJson.next_page_token !== "" &&
        responseJson.next_page_token !== undefined
      ) {
        console.log("has next page!" + responseJson.next_page_token);
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
