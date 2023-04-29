import axios from "axios";

export const fetchRestaurant = async (placeId: string) => {
  try {
    const url: string = `${process.env.REACT_APP_BASE_URL}/api/v1/restaurant/${placeId}`;
    const {
      data: { result },
    } = await axios.get(url);

    return result;
  } catch (error) {
    console.log(error);
  }
};
