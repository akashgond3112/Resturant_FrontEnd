import axios from "axios";

export const postLogin = async (userCredentials: object) => {
  try {
    const url: string = `${process.env.REACT_APP_BASE_URL}/api/v1/auth/login`;
    const data = await axios.post(url, userCredentials);
    return data;
  } catch (error) {
    return error;
  }
};

export const getUserInfo = async (token: string) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url: string = `${process.env.REACT_APP_BASE_URL}/api/v1/auth/userinfo`;
    const data = await axios.get(url, config);
    return data;
  } catch (error) {
    return error;
  }
};

export const postLogout = async (token: string) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url: string = `${process.env.REACT_APP_BASE_URL}/api/v1/auth/logout`;
    const data = await axios.post(url, config);
    return data;
  } catch (error) {
    return error;
  }
};

export const postRegister = async (userRegister: object) => {
  try {
    const url: string = `${process.env.REACT_APP_BASE_URL}/api/v1/user/register`;
    const data = await axios.post(url, userRegister);
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchSentiment = async (reviewData: string) => {
  try {
    const url: string = `${process.env.REACT_APP_BASE_SENTIMENT_ENGINE_URL}/sentiment`;
    const data = await axios.post(url, { review: reviewData });

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

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

/* This bloack of statement deal with reviews CURD functionality */
export const addReview = async (addReviewObject: object, token: string) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url: string = `${process.env.REACT_APP_BASE_URL}/api/v1/restaurant/reviews`;
    const data = await axios.post(url, addReviewObject, config);
    return data;
  } catch (error) {
    return error;
  }
};

export const updateReview = async (
  addReviewObject: object,
  restaurantId: string,
  token: string
) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url: string = `${process.env.REACT_APP_BASE_URL}/api/v1/restaurant/reviews/${restaurantId}`;
    const data = await axios.put(url, addReviewObject, config);
    return data.data;
  } catch (error) {
    return error;
  }
};

export const getReviews = async (restaurantId: string, token: string, userId : number) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        userId: userId,
      },
    };

    const url: string = `${process.env.REACT_APP_BASE_URL}/api/v1/restaurant/reviews/${restaurantId}`;
    const data = await axios.get(url, config);
    return data;
  } catch (error) {
    return error;
  }
};


export const deleteReview = async (reviewId: string, token: string) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url: string = `${process.env.REACT_APP_BASE_URL}/api/v1/restaurant/reviews/${reviewId}`;
    const data = await axios.get(url, config);
    return data.data;
  } catch (error) {
    return error;
  }
};