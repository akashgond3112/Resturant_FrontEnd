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
    const refs: [] | ((prevState: never[]) => never[]) = [];
    for (let i = 0; i < props.places?.length; i++) {
      refs[i] = eleRefs[i] || createRef();
    }
    console.log(refs);

    setEleRefs(refs);
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
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl> */}
          <Grid container spacing={2} className={classes.list}>
            {props.places?.map((place: any, i: number) => (
              <Grid key={i} item xs={12}>
                <RestaurantDetails
                  place={place}
                  selected={Number(props.childClicked) === i}
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
