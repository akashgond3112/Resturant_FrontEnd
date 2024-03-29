import React, { Dispatch, SetStateAction } from "react";
import GoogleMapReact from "google-map-react";
import { useMediaQuery } from "@mui/material";
import { useMapStyles } from "./MapModule";
import Marker from "./Marker";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export const Map: React.FC<{
  setCoords: Dispatcher<any>;
  setBounds: Dispatcher<any>;
  setChildClicked: Dispatcher<any>;
  coords: any;
  places: any;
}> = (props) => {
  const {classes} = useMapStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_KEY}` }}
        defaultCenter={props.coords}
        center={props.coords}
        defaultZoom={14}
        yesIWantToUseGoogleMapApiInternals
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          props.setCoords({ lat: e.center.lat, lng: e.center.lng });
          props.setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          props.setChildClicked(child);
        }}
      >
        {props.places?.map((place: any, i: number) => (
          <Marker
            lat={Number(place.geometry.location.lat)}
            lng={Number(place.geometry.location.lng)}
            place={place}
            isDesktop={isDesktop}
            key={i}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};
