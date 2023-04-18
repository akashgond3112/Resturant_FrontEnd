import { FC } from "react";
import { Paper, Rating, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useMapStyles } from "./MapModule";

type MarkerProps = {
  lat: number;
  lng: number;
  place: any;
  isDesktop: boolean;
};

const Marker: FC<MarkerProps> = ({ lat, lng, place, isDesktop }) => {
  const classes = useMapStyles();

  return (
    <div className={classes.markerContainer}>
      {!isDesktop ? (
        <LocationOnOutlinedIcon color="primary" fontSize="large" />
      ) : (
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="subtitle2" gutterBottom>
            {place.name}
          </Typography>
          <img
            className={classes.pointer}
            src={
              place.photos.length > 0
                ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_KEY}`
                : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
            }
            alt=""
          />
          <Rating size="small" value={Number(place.rating)} readOnly />
        </Paper>
      )}
    </div>
  );
};

export default Marker;
