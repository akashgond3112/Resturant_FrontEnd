import { makeStyles } from "tss-react/mui";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

export const useSection2Styles = makeStyles()(() => {
  return {
    main: {
      position: "sticky",
      top: "0px",
      zIndex: "3",
      background: "rgb(255, 255, 255)",
      alignSelf: "flex-start",
      width: "100%",
    },
    restaurantInforamtion: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      WebkitBoxPack: "justify",
    },
    detailSection: {
      marginTop: "1rem",
      width: "100%",
    },
    informationContainer: {
      display: "flex",
      WebkitBoxAlign: "center",
      alignItems: "center",
      width: "100%",
      WebkitBoxPack: "justify",
      justifyContent: "space-between",
    },
    informationHolder: {
      width: "100%",
    },
    nameRatingContainer: {
      display: "flex",
      WebkitBoxAlign: "center",
      alignItems: "center",
      width: "100%",
      WebkitBoxPack: "justify",
      justifyContent: "space-between",
    },
    restaurantName: {
      lineHeight: "1.2",
      color: "rgb(28, 28, 28)",
      margin: "0px",
      fontWeight: "500",
      fontSize: "2rem",
      cursor: "pointer",
    },
    ratingContainer: {
      display: "flex",
      WebkitBoxAlign: "center",
      alignItems: "center",
      fontSize: "inherit",
      cursor: "pointer",
    },
    totalRatingContainer: {
      display: "block",
      fontSize: "inherit",
      marginLeft: "1.6rem",
    },
    totalRating: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "0.8rem",
      paddingBottom: "0px",
      borderBottom: "unset",
      color: "rgb(54 54 54)",
    },
    totalRatingTitle: {
      fontWeight: 400,
      fontSize: "0.8rem",
      lineHeight: "1rem",
      paddingBottom: "0px",
      borderBottom: "0.5px dashed rgb(181, 181, 181)",
      color: "rgb(54 54 54)",
    },
    servicesAndAdressContainer: {
      fontSize: "1.8rem",
      lineHeight: 1.5,
      color: "rgb(130 130 130)",
      marginTop: "0,5rem",
    },
    serviceTypes: {
      fontSize: "1.2rem",
    },
    type: {
      color: "rgb(105 105 105)",
      display: "inline",
      textDecoration: "none",
    },
    address: {
      textDecoration: "none",
      fontSize: "1.2rem",
      color: "rgb(156 156 156)",
    },
    restaurantHours: {
      display: "flex",
      flexDirectionn: "column",
      marginTop: "0.5rem",
      alignItems: "flex-start",
    },
    openingHours: {
      display: "flex",
      WebkitBoxAlign: "center",
      alignItems: "center",
    },
    isOpen: {
      color: "rgb(244 162 102)",
      fontSize: "1.2rem",
      lineHeight: 1.2,
    },
    currentOpeningHours: {
      color: "rgb(130 130 130)",
      fontSize: "1rem",
      lineHeight: 1.2,
      "&::before": {
        content: '"-"',
        margin: "0px 0.5rem",
      },
    },
    servicesProvided: {
      display: "flex",
      flexDirectionn: "row",
      gap: "1.5rem",
      alignItems: "flex-start",
      marginTop: "0.5rem",
      color: "rgb(130 130 130)",
    },
    actions: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    actionHolder: {
      display: "flex",
      alignItems: "center",
      marginTop: "1.5rem",
      paddingBottom: "1rem",
      pointerEvents: "all",
      opacity: 1,
      transition: "opacity 0.2s ease-in-out 0s",
    },
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
  };
});
