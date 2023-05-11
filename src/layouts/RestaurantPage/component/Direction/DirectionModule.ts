import { createStyles, makeStyles } from "@mui/styles";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

export const useDirectionStyles = makeStyles(() =>
  createStyles({
    directionContainer: {
      height: "2.8rem",
      width: "max-content",
      padding: "0px 1rem",
      background: "rgb(255 255 255)",
      borderRadius: "0.8rem",
      border: "1px solid rgb(156, 156, 156)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      marginRight: "1rem",
      "&:hover": {
        backgroundColor: "rgb(248, 248, 248)",
      },
    },
    directionInformation: {
      display: "flex",
      alignItems: "center",
      cursor: "inherit",
    },
    directionSvg: {
      display: "inline-block",
      verticalAlign: "middle",
      lineHeight: "1",
      width: "16px",
      height: "16px",
    },
    direction: {
      fontSize: "1.4rem",
      color: "rgb(28 28 28)",
      marginLeft: "0.5rem",
      userSelect: "none",
    },
    "@media (min-width: 769px)": {
      width: "calc(100% + 1rem)",
      paddingRight: "1rem",
    },
  })
);
