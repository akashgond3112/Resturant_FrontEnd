import React, { Dispatch, SetStateAction, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Rating, Typography, useMediaQuery } from "@mui/material";
import { useMapStyles } from "./MapModule";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Marker from "./Marker";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export const Map: React.FC<{
  setCoords: Dispatcher<any>;
  setBounds: Dispatcher<any>;
  setChildClicked: Dispatcher<any>;
  coords: any;
  places: any;
}> = (props) => {
  const classes = useMapStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAp9kJFu7_QJy9WfW4rgV9mBUsddMtIccU" }}
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
