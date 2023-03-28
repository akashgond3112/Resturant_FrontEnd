import { createStyles, makeStyles } from "@mui/styles";


export const useRestaurantDetailsStyles = makeStyles(() =>
  createStyles({
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
  })
);
