import { createStyles, makeStyles } from "@mui/styles";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

export const useMapStyles = makeStyles(() =>
  createStyles({
    paper: {
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100px",
    },
    mapContainer: {
      height: "85vh",
      width: "100%",
    },
    markerContainer: {
      position: "absolute",
      transform: "translate(-50%, -50%)",
      zIndex: 1,
      "&:hover": { zIndex: 2 },
    },
    pointer: {
      cursor: "pointer",
      background: "no-repeat center/cover",
      height: "72px",
      minWidth: "128px",
    },
  })
);
