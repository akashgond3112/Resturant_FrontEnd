import {
  CircularProgress,
  Grid,
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
  const [eleRefs, setEleRefs] = useState([]);

  console.log(props.childClicked);

  useEffect(() => {
    const refs: [] | ((prevState: never[]) => never[]) = [];
    for (let i = 0; i < props.places?.length; i++) {
      refs[i] = eleRefs[i] || createRef();
    }
    setEleRefs(refs);
  }, [props.places]);

  return (
    <div className={classes.container}>
      <Typography variant="h5" className={classes.marginBottom}>
        Restaurants around you.
      </Typography>
      {props.isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <Grid container spacing={2} className={classes.list}>
            {props.places?.map((place: any, i: number) => (
              <Grid ref={eleRefs[i]} key={i} item xs={12}>
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
