import {
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState, useEffect, createRef } from "react";
import { useListStyles } from "./ListModule";
import { RestaurantDetails } from "../RestaurantDetails/RestaurantDetails";

export const List: React.FC<{
  places: any;
  childClicked: any;
  isLoading: boolean;
}> = (props) => {
  const classes = useListStyles();
  const [rating, setRating] = useState("");
  const [type, setType] = useState("");
  const [eleRefs, setEleRefs] = useState([]);

  useEffect(() => {
    setEleRefs(
      Array(props.places.length)
        .fill(0)
        .map((_, i: number) => eleRefs[i] || createRef())
    );
  }, [props.places]);
  
  return (
    <div className={classes.container}>
      <Typography variant="h5">Restaurants around you.</Typography>
      {props.isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          {/* <FormControl className={classes.formControl}>
        <InputLabel id="type">Type</InputLabel>
        <Select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl> */}
          <Grid container spacing={2} className={classes.list}>
            {props.places?.map((place: any, i: number) => (
              <Grid key={i} item xs={12}>
                <RestaurantDetails
                  place={place}
                  selected={Number(props.childClicked === i)}
                  refProp={eleRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};
