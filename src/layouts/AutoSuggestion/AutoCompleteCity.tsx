import { InputBase } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";
import { Dispatch, SetStateAction } from "react";
import { useListStyles } from "./AutoCompleteCityModule";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export const AutoCompleteCity: React.FC<{
  onLoad: Dispatcher<any>;
  onPlaceChanged: any;
}> = (props) => {
  const classes = useListStyles();

  return (
    <Autocomplete onLoad={props.onLoad} onPlaceChanged={props.onPlaceChanged}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{ root: classes.inputRoot, input: classes.inputInput }}
        />
      </div>
    </Autocomplete>
  );
};
