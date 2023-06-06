import { InputBase } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";
import { Dispatch, SetStateAction } from "react";
import { useListStyles } from "./AutoCompleteCityModule";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

type Dispatcher<S> = Dispatch<SetStateAction<S>>; // Define type alias for Dispatcher<S>

// Define props for AutoCompleteCity component
export const AutoCompleteCity: React.FC<{
  onLoad: Dispatcher<any>; // Function that gets called with AutocompleteService object when loaded
  onPlaceChanged: any; // Function that gets called when user selects a place from the list
}> = (props) => {
  const {classes} = useListStyles(); // Get CSS styles from useListStyles hook

  // Return Autocomplete component with search bar
  return (
    <Autocomplete onLoad={props.onLoad} onPlaceChanged={props.onPlaceChanged}>
      <div className={classes.search}>
        {/* CSS class for search bar container */}
        <div className={classes.searchIcon}>
          {/* CSS class for search icon */}
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…" // Placeholder text for search bar
          classes={{ root: classes.inputRoot, input: classes.inputInput }} // CSS classes for search bar input
        />
      </div>
    </Autocomplete>
  );
};
