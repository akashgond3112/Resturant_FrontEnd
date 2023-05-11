import { useEffect, useState } from "react";
import Restaurant from "../models/Restaurant/Restaurant";

// A custom hook that fetches nearby restaurants based on latitude, longitude, and a nextPageToken.
export const useFetchAllRestaurantsNearBy = (
  lat: number,
  lng: number,
  nextPageToken: string
) => {
  // Define the state variables to be used in the hook.
  const [resturants, setResturants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [tmpNextPageToken, setTmpNextPageToken] = useState("");
  const [endOfPage, setEndOfPage] = useState(false);

  // useEffect hook that is called whenever the hook dependencies change (i.e. lat, lng, or nextPageToken).
  useEffect(() => {
    setIsLoading(true);
    setHttpError(null);

    // Asynchronous function that fetches nearby restaurants from the API.
    const fetchNearByResturants = async () => {
      // If lat and lng are both 0, return and do nothing.
      if (lat === 0 && lng === 0) {
        return;
      }

      let url: string = "";

      // Define the url to fetch based on whether there is a nextPageToken or not.
      if (!hasNextPage) {
        url = `${process.env.REACT_APP_BASE_URL}/api/v1/restaurants?lat=${lat}&lng=${lng}&query=restaurants&radius=2000&pageToken=`;
      } else {
        url = `${process.env.REACT_APP_BASE_URL}/api/v1/restaurants?pageToken=${nextPageToken}`;
      }

      const response = await fetch(url);

      // If the server returns a 500 error, do nothing for now.
      if (response.status === 500) {
      }

      // Parse the response as JSON.
      const responseJson = await response.json();

      // Extract the restaurant data from the response.
      const responseData = responseJson.results;

      // Convert the restaurant data into Restaurant objects and add them to loadedRestaurants.
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
            weekday_text: [],
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
          website: "",
        });
      }

      //  update the restaurants with new data
      setResturants((prev) => [...prev, ...loadedResturants]);
      setIsLoading(false); //  setting the loading as as false

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

  // returning the data back
  return {
    resturants,
    isLoading,
    httpError,
    hasNextPage,
    tmpNextPageToken,
    endOfPage,
  };
};
