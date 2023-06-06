import { CssBaseline, Grid } from "@mui/material";
import { ExploreTopResturant } from "./Component/ExploreTopResturant";
import { List } from "./List/List";
import { Map } from "./Map/Map";
import { useEffect, useState } from "react";
import { useHomePagePageStyles } from "./HomePageModule";
import { fetchRestaurants } from "../../api/stateAPI";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */


export const HomePage = () => {

  const {classes} = useHomePagePageStyles();
  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState({ lat: 54.9677423, lng: -1.6224093 });
  const [bounds, setBounds] = useState({
    sw: { lat: "", lng: "" },
    ne: { lng: "", lat: "" },
  });
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchRestaurants(coords.lat, coords.lng, "").then((data) => {
      setPlaces(data);
      setLoading(false);
    });
  }, [bounds, coords]);

  return (
    <>
      <div className={classes.main}>
        <CssBaseline>
          <ExploreTopResturant />
          <Grid container spacing={3} style={{ width: "100%" }}>
            <Grid item xs={12} md={4}>
              <List
                places={places}
                childClicked={childClicked}
                isLoading={isLoading}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Map
                setCoords={setCoords}
                setBounds={setBounds}
                coords={coords}
                places={places}
                setChildClicked={setChildClicked}
              />
            </Grid>
          </Grid>
        </CssBaseline>
      </div>
    </>
  );
};
