import { CircularProgress, Grid } from "@mui/material";
import React, { useState, useEffect, createRef } from "react";
import { useListStyles } from "./ListModule";
import { RestaurantDetails } from "../RestaurantDetails/RestaurantDetails";
import { NavLink } from "react-router-dom";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

export const List: React.FC<{
  places: any;
  childClicked: any;
  isLoading: boolean;
}> = (props) => {
  const classes = useListStyles();
  const [eleRefs, setEleRefs] = useState([]);

  useEffect(() => {
    const refs: [] | ((prevState: never[]) => never[]) = [];
    for (let i = 0; i < props.places?.length; i++) {
      refs[i] = eleRefs[i] || createRef();
    }
    setEleRefs(refs);
  }, [props.places]);

  return (
    <div className={classes.container}>
      {props.isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <Grid container spacing={2} className={classes.list}>
            {props.places?.map((place: any, i: number) => (
              <Grid ref={eleRefs[i]} key={i} item xs={12}>
                <NavLink
                  key={place.place_id}
                  to={`/restaurant/${place.place_id}`}
                  style={{ textDecoration: "none" }}
                >
                  <RestaurantDetails
                    place={place}
                    selected={Number(props.childClicked) === i}
                    refProp={eleRefs[i]}
                  />
                </NavLink>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};
