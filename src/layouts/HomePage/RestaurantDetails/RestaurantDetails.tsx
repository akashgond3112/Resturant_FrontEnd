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
import React, {  } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Rating from "@mui/material/Rating";

import { useRestaurantDetailsStyles } from "./RestaurantDetailsModule";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

export const RestaurantDetails: React.FC<{
  place: any;
  selected: boolean;
  refProp: any;
}> = (props) => {
  const classes = useRestaurantDetailsStyles();

  if (props.selected) {
    props.refProp?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }


  if (props.place === undefined || props.place.photos.length <= 0) {
    return null;
  }

  const imgSrcUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${props.place.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_KEY}`;

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 250 }}
        image={
          props.place.photos.length > 0
            ? imgSrcUrl
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={props.place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {props.place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating
            name="read-only"
            value={Number(props.place.rating)}
            readOnly
          />
          <Typography gutterBottom variant="subtitle1">
            {props.place.user_ratings_total} review
            {props.place.user_ratings_total > 1 && ""}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {props.place.price_level}
          </Typography>
        </Box>
        {props.place?.types?.map((name: any) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {props.place.formatted_address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {props.place.formatted_address}
          </Typography>
        )}
      </CardContent>
      {props.place.website && (
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(props.place.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
