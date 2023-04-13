import { createStyles, makeStyles } from "@mui/styles";

export const useSection2Styles = makeStyles(() =>
  createStyles({
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
      fontSize: "2.6rem",
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
      fontSize: "1.6rem",
    },
    type: {
      color: "rgb(105 105 105)",
      display: "inline",
      textDecoration: "none",
    },
    "@media (min-width: 769px)": {
      width: "calc(100% + 1rem)",
      paddingRight: "1rem",
    },
  })
);
