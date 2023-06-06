import { makeStyles } from "tss-react/mui";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

export const useRestaurantDetailsStyles = makeStyles()(() => {
  return {
    chip: {
      margin: "1px 1px 1px 0",
    },
    subtitle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "10px",
    },
    spacing: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  };
});
