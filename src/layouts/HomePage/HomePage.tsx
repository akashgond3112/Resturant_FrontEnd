import { CssBaseline, Grid } from "@mui/material";
import { ExploreTopResturant } from "./Component/ExploreTopResturant";
import { List } from "./List/List";
import { Map } from "./Map/Map";
import { useEffect, useState } from "react";

import { fetchRestaurants } from "../../hooks/fetchRestaurants";

export const HomePage = () => {
  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState({});
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
    console.log(coords, bounds);
    setLoading(true);
    fetchRestaurants("restaurants", bounds.sw, bounds.ne).then((data) => {
      console.log(data);

      setPlaces(data);
      setLoading(false);
    });
  }, [bounds, coords]);

  return (
    <>
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
    </>
  );
};
