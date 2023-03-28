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
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Rating from "@mui/material/Rating";

import { useRestaurantDetailsStyles } from "./RestaurantDetailsModule";

export const RestaurantDetails: React.FC<{
  place: any;
  selected: number;
  refProp: any;
}> = (props) => {
  const classes = useRestaurantDetailsStyles();

  if (props.selected) {
    props.refProp?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 250 }}
        image={
          props.place.photo
            ? props.place.photo.images.large.url
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
            {props.place.num_reviews} review{props.place.num_reviews > 1 && ""}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {props.place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {props.place.ranking}
          </Typography>
        </Box>
        {props.place?.cuisine?.map(({ name }: any) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {props.place.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {props.place.address}
          </Typography>
        )}
        {props.place.phone && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {props.place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(props.place.website, "_blank")}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
};
