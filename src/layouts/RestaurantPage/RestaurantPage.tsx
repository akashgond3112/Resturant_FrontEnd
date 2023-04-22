import React from "react";
import { Section1 } from "./component/Section1";
import { useRestaurantPageStyles } from "./RestaurantPageModule";
import jsonData from "../../data/restaurant.json";
import { Section2 } from "./component/Section2";
import Section3 from "./component/Section3";
import { Section4 } from "./component/Section4";
import Restaurant from "../../models/Restaurant/Restaurant";

type Props = {};

const RestaurantPage = (props: Props) => {
  const data = jsonData.result;

  const loadedRestaurant: Restaurant = {
    name: data.name,
    opening_hours: data.opening_hours,
    photos: data.photos,
    place_id: data.place_id,
    rating: data.rating,
    user_ratings_total: data.user_ratings_total,
    formatted_address: data.formatted_address,
    price_level: 0,
    business_status: data.business_status,
    geometry: data.geometry,
    icon: data.icon,
    icon_background_color: data.icon_background_color,
    icon_mask_base_uri: data.icon_mask_base_uri,
    plus_code: data.plus_code,
    reference: data.reference,
    types: data.types,
    address_components: data.address_components,
    adr_address: data.adr_address,
    current_opening_hours: data.current_opening_hours,
    delivery: data.delivery,
    dine_in: data.dine_in,
    formatted_phone_number: data.formatted_phone_number,
    international_phone_number: data.international_phone_number,
    reservable: data.reservable,
    reviews: data.reviews,
    serves_beer: data.serves_beer,
    serves_dinner: data.serves_dinner,
    serves_wine: data.serves_wine,
    takeout: data.takeout,
    url: data.url,
    utc_offset: data.utc_offset,
    vicinity: data.vicinity,
    website: "",
  };

  const classes = useRestaurantPageStyles();
  return (
    <div className={classes.main}>
      <Section1 resaurant={loadedRestaurant} />
      <Section2 resaurant={loadedRestaurant} />
      <Section3 />
      <Section4 resaurant={loadedRestaurant} />
    </div>
  );
};

export default RestaurantPage;
