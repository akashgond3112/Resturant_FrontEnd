import axios from "axios";

export const fetchRestaurants = async (
  type: string,
  sw: { lat: string; lng: string },
  ne: { lng: string; lat: string }
) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-key":
            "86c90d01cdmsh83bf9077bbc9d54p160fe5jsn37119c588ed6",
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
