import axios from "axios";

export const fetchRestaurants = async (
  lat: number,
  lng: number,
  nextPageToken: string
) => {
  try {
    const url: string = `${process.env.REACT_APP_BASE_URL}/api/v1/restaurants`;

    const {
      data: { results },
    } = await axios.get(url, {
      params: {
        lat: lat,
        lng: lng,
        query: "restaurants",
        radius: "1609",
        pageToken: nextPageToken,
      },
    });

    return results;
  } catch (error) {
    console.log(error);
  }
};
