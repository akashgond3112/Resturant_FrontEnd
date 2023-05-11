import { createStyles, makeStyles } from "@mui/styles";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

export const useShareStyles = makeStyles(() =>
  createStyles({
    shareContainer: {
      height: "2.8rem",
      padding: "0px 1rem",
      background: "rgb(255 255 255)",
      borderRadius: "0.8rem",
      border: "1px solid rgb(156, 156, 156)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      marginRight: "1rem",
      width: "unset",
      position: "relative",
      "&:hover": {
        backgroundColor: "rgb(248, 248, 248)",
      },
    },
    shareInformation: {
      display: "flex",
      alignItems: "center",
      cursor: "inherit",
    },
    shareSvg: {
      display: "inline-block",
      verticalAlign: "middle",
      lineHeight: "1",
      width: "16px",
      height: "16px",
    },
    share: {
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
