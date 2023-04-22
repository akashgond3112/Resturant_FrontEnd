import axios from "axios";

export const fetchSentiment = async (reviewData: string) => {
  try {
    const url: string = `${process.env.REACT_APP_BASE_SENTIMENT_ENGINE_URL}/sentiment`;
    const data = await axios.post(url, { review: reviewData });

    return data.data;
  } catch (error) {
    console.log(error);
  }
};
