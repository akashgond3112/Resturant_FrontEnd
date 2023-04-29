import React, { useEffect, useState } from "react";
import { Section1 } from "./component/Section1";
import { useRestaurantPageStyles } from "./ResturantDetailPageModule";
import { Section2 } from "./component/Section2";
import Section3 from "./component/Section3";
import { Section4 } from "./component/Section4";
import Restaurant from "../../models/Restaurant/Restaurant";

export const ResturantDetailPage: React.FC<{}> = (props) => {
  const [restaurant, setRestaurant] = useState<Restaurant | undefined>(
    undefined
  );

  const key = window.location.pathname.split("/")[2];

  useEffect(() => {
    const fetchBook = async () => {
      const url: string = `${process.env.REACT_APP_BASE_URL}/api/v1/restaurant/${key}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Somethign went wrong`);
      }

      const responseJson = await response.json();

      const data = responseJson.result;

      const loadedRestaurant: Restaurant = {
        name: data.name,
        opening_hours: data.opening_hours,
        photos: data.photos,
        place_id: data.place_id,
        rating: data.rating,
        user_ratings_total: data.user_ratings_total,
        formatted_address: data.formatted_address,
        price_level: data?.price_level,
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
        website: data.website,
      };

      setRestaurant(loadedRestaurant);
    };

    fetchBook().catch((error: any) => {
      console.log(error);
    });
  }, []);

  /* This use effect maintain the page state , so that whenever user refresh , the user willbe in same postion */
  useEffect(() => {
    // Get the stored scroll position, or 0 if it doesn't exist
    const storedScrollY = Number(localStorage.getItem("scrollY")) || 0;

    // Scroll to the stored position after the component mounts
    window.scrollTo(0, storedScrollY);

    // Store the current scroll position in localStorage whenever it changes
    const handleScroll = () => {
      localStorage.setItem("scrollY", window.scrollY.toString());
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const classes = useRestaurantPageStyles();
  return restaurant !== undefined ? (
    <div className={classes.main}>
      <Section1 restaurant={restaurant} />
      <Section2 resaurant={restaurant} />
      <Section3 />
      <Section4 resaurant={restaurant} />
    </div>
  ) : (
    <div></div>
  );
};
