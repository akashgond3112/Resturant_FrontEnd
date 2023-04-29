import { createStyles, makeStyles } from "@mui/styles";

export const useSection1Styles = makeStyles(() =>
  createStyles({
    main: {
      position: "relative",
    },
    container: {
      width: "100%",
      display: "flex",
      height: "22rem",
    },
    primaryImage: {
      minWidth: "62.4%",
      maxWidth: "100%",
      width: "62.4%",
      height: "100%",
      position: "relative",
      cursor: "pointer",
      margin: "0px",
      overflow: "hidden",
    },
    imageHolder: {
      position: "relative",
      maxWidth: "100%",
      width: "100%",
      height: "100%",
      overflow: "hidden",
    },
    animateImage: {
      opacity: 0,
      transition: "opacity 0.5s ease-in-out",
    },
    animateImageLoaded: {
      opacity: 1,
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: "none",
      opacity: "1",
      willChange: "transform, opacity",
      borderRadius: "inherit",
      filter: "brightness(0.95)",
      transition:
        "transform 0.4s ease-in-out 0s, opacity 1.63s ease 0s, filter 0.4s ease 0s",
      "&:hover": {
        transform: "scale(1.05)",
        filter: "brightness(1.05)",
      },
    },
    secondaryImageContainer: {
      width: "100%",
      height: "100%",
      marginLeft: "0.6rem",
      display: "flex",
      flexDirection: "column",
    },
    secondaryImage: {
      minWidth: "62.4%",
      maxWidth: "100%",
      width: "100%",
      height: "100%",
      position: "relative",
      cursor: "pointer",
      margin: "0px 0px 0.3rem",
      overflow: "hidden",
    },
  })
);
