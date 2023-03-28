import { createTheme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const theme = createTheme();

export const useListStyles = makeStyles(() =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      marginBottom: "30px",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    loading: {
      height: "600px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      padding: "25px",
    },
    marginBottom: {
      marginBottom: "30px",
    },
    list: {
      height: "75vh",
      overflow: "auto",
    },
  })
);
