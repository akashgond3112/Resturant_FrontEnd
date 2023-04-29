import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Rating from "@mui/material/Rating";
import Restaurant from "../../../models/Restaurant/Restaurant";

import { useRestaurantDetailsStyles } from "./RestaurantDetailsModule";

export const RestaurantDetails: React.FC<{
  place: any;
  selected: boolean;
  refProp: any;
}> = (props) => {
  const classes = useRestaurantDetailsStyles();

  const [restaurant, setRestaurant] = useState<Restaurant>();

  if (props.selected) {
    props.refProp?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  useEffect(() => {
    const fetchBook = async () => {
      const url: string = `${process.env.REACT_APP_BASE_URL}/api/v1/restaurant/${props.place.place_id}`;

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

  if (restaurant === undefined || restaurant.photos.length <= 0) {
    return null;
  }

  const imgSrcUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${restaurant.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_KEY}`;

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 250 }}
        image={
          restaurant.photos.length > 0
            ? imgSrcUrl
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={restaurant.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {restaurant.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating name="read-only" value={Number(restaurant.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            {restaurant.user_ratings_total} review
            {restaurant.user_ratings_total > 1 && ""}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {restaurant.price_level}
          </Typography>
        </Box>
        {/* <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {restaurant.ranking}
          </Typography>
        </Box> */}
        {restaurant?.types?.map((name: any) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {restaurant.formatted_address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {restaurant.formatted_address}
          </Typography>
        )}
        {restaurant.formatted_phone_number && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {restaurant.formatted_phone_number}
          </Typography>
        )}
      </CardContent>
      {restaurant.website && (
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(restaurant.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
