import { createStyles, makeStyles } from "@mui/styles";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */


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
    /* Submit Review section start */
    addReviewContainer: {
      marginTop: "1.5rem",
      display: "flex",
      justifyContent: "flex-start",
      marginBottom: "1.5rem",
    },
    addReviewMain: {
      minWidth: "auto",
      minHeight: "50px",
      display: "inline-flex",
      alignItems: "strech",
      borderRadius: "0.6rem",
      background: "transparent",
      padding: "0px",
      border: "none",
      cursor: "none",
    },
    addReviewSpanPrimary: {
      display: "inline-flex",
      verticalAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
      minWidth: "auto",
      minHeight: "36px",
      lineHeight: "36px",
      marginTop: "0px",
      marginLeft: "0px",
      whiteSpace: "nowrap",
      fontSize: "1rem",
      color: "rgb(255, 255, 255)",
      opacity: 1,
      background: "border-box rgb(239, 79, 95)",
      borderColor: "rgb(255, 126, 139)",
      borderWidth: "0.1rem",
      borderStyle: "solid",
      borderRadius: "0.6rem",
      padding: "0px 1.6rem",
      transition:
        "transform 0.25s ease 0s, opacity 0.25s ease 0s, box-shadow 0.25s ease 0s",
      outline: "none !important",
    },
    addReviewSpanSecondary: {
      display: "inline-block",
      verticalAlign: "middle",
      lineHeight: "normal",
      fontSize: "inherit",
      transition: "transform 0.4s ease 0s",
    },
    /* Submit Review section end */
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
