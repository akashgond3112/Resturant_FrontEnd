import { createStyles, makeStyles } from "@mui/styles";

export const useSection3Styles = makeStyles(() =>
  createStyles({
    main: {
      position: "sticky",
      top: "210px",
      zIndex: "3",
      width: "100%",
      paddingRight: "1rem",
      backgroundColor: "rgb(255 255 255)",
      transform: "translateZ(0px)",
      transition: "transform 0.2s ease-in-out 0s",
    },
    container: {
      position: "relative",
      overflowY: "auto",
      backgroundColor: "white",
    },
    section1: {
      width: "100%",
      maxWidth: "100rem",
      overflow: "auto hidden",
      minHeight: "6.2rem",
      position: "relative",
    },
    options: {
      "& :first-child": {
        marginLeft: "0px",
        paddingLeft: "0px",
      },
      "& :last-child": {
        marginRight: "0px",
        paddingRight: "0px",
      },
      width: "max-content",
      minWidth: "100%",
      display: "flex",
      position: "relative",
      justifyContent: "start",
      backgroundColor: "transparent",
      overflowX: "auto",
    },
    option: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      maxHeight: "100%",
      marginRight: "2rem",
      cursor: "pointer",
    },
    inactive: {
      fontSize: "1.2rem",
      lineHeight: "1.2",
      fontWeight: "300",
      margin: "0.3rem 1rem",
      border: "1px solid transparent",
      padding: "0.5rem 0.8rem",
      borderRadius: "6px",
      whiteSpace: "nowrap",
      color: "rgb(105 105 105)",
    },
    active: {
      fontSize: "1.2rem",
      lineHeight: "1.2",
      fontWeight: "300",
      margin: "0.3rem 1rem",
      border: "1px solid transparent",
      padding: "0.5rem 0.8rem",
      borderRadius: "6px",
      whiteSpace: "nowrap",
      color: "rgb(239 79 95)",
    },
    linkInaActive: {
      textDecoration: "none",
      fontSize: "1.6rem",
      fontWeight: "400",
      color: "rgb(105 105 105)",
    },
    linkActive: {
      textDecoration: "none",
      fontSize: "1.6rem",
      fontWeight: "500",
      color: "rgb(239 79 95)",
    },
    underline: {
      height: "1.2rem",
      borderColor: "transparent",
      borderRadius: "0.7rem",
      backgroundColor: "rgb(255 126 139)",
      transform: "none",
      width: "100%",
      margin: "0.8rem 0px 0.1rem",
      willChange: "transform",
      transition: "transform 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s",
      zIndex: "1",
    },
    mainBorder: {
      width: "calc(100% - 2px)",
      height: "0rem",
      borderTop: "2px solid rgb(113, 113, 113)",
      borderBottom: "none",
      bottom: "1px",
      left: "0px",
      margin: "0px",
      padding: "0px",
      position: "absolute",
    },
    "@media (min-width: 769px)": {
      main: {
        width: "calc(100% + 1rem)",
      },
      mainBorder: {
        minWidth: "calc(100% - 2px)",
      },
    },
  })
);