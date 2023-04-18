import { createStyles, makeStyles } from "@mui/styles";

export const useSection4Styles = makeStyles(() =>
  createStyles({
    main: {
      width: "100%",
    },
    container: {
      padding: "0px",
    },
    subContainer: {
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
    },
    reviewSectionMain: {
      width: "100%",
    },
    restaurantName: {
      lineHeight: 1.2,
      color: "rgb(28 28 28)",
      margin: "0px",
      fontSize: "1.6rem",
      fontWeight: "500",
    },
    reviewContainer: {
      marginTop: "2.5rem",
    },

    /* User Information Start */
    userSection: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "2rem",
      maxWidth: "inherit",
    },
    UserInfoContainer: {
      display: "flex",
      flexGrow: "1",
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
    },
    userProfileLink: { textDecoration: "none" },
    imageHolder: {
      position: "relative",
      maxWidth: "100%",
      width: "4.4rem",
      height: "4.4rem",
      overflow: "hidden",
    },
    imagePrimary: {
      width: "100%",
      position: "absolute",
      top: "0px",
      left: "0px",
      height: "100%",
      background:
        "linear-gradient(to right, rgb(248, 248, 248) 0%, rgb(255, 255, 255) 10%, rgb(248, 248, 248) 40%, rgb(248, 248, 248) 100%) no-repeat rgb(248, 248, 248)",
      opacity: "0",
      transition: "opacity 0.25s ease-out 0s",
      willChange: "opacity",
      borderRadius: "inherit",
      animation: "1.5s linear 0s infinite normal forwards running jCOzbu",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: "none",
      opacity: 1,
      willChange: "transform, opacity",
      borderRadius: "inherit",
      filter: "unset",
      transition: "opacity 0.25s ease 0s, transform 0.25s ease 0s",
    },
    userProfileDetails: {
      marginLeft: "1.2rem",
      flexGrow: "1",
      overflow: "hidden",
    },
    userName: {
      fontSize: "inherit",
      lineHeight: "1.5",
      color: "rgb(54 54 54)",
      size: "1.2rem",
      overflow: "hidden",
      textOverflow: "ellipsis",
      flexGrow: "1",
      margin: "0px 0px 0.2rem",
      fontWeight: "500",
    },
    userTotalReviewFollower: {
      display: "flex",
    },
    userTotalReviewContainer: {
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "rgb(156 156 156)",
    },
    userTotalFollowerContainer: {
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "rgb(156 156 156)",
      display: "flex",
      alignItems: "center",
      "&::before": {
        content: '""',
        width: "0.4rem",
        height: "0.4rem",
        borderRadius: "50%",
        display: "inline-block",
        margin: "0px 0.5rem",
      },
    },
    followButtonContainer: {
      minWidth: "auto",
      minHeight: "36px",
      display: "inline-flex",
      alignItems: "stretch",
      borderRadius: "0.6rem",
      background: "transparent",
      padding: "0px",
      border: "none",
      cursor: "pointer",
    },
    followButton: {
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
      color: "rgb(239 79 95)",
      opacity: 1,
      background: "border-box transparent",
      borderColor: "rgb(255, 126, 139)",
      borderWidth: "0.1rem",
      borderStyle: "solid",
      borderRadius: "0.6rem",
      padding: "0px 1.6rem",
      transition:
        "transform 0.25s ease 0s, opacity 0.25s ease 0s, box-shadow 0.25s ease 0s",
      outline: "none !important",
      "&:hover": {
        color: "rgb(191, 41, 56)",
        background: "rgba(239, 79, 95, 0.04)",
        borderColor: "rgb(224, 53, 70)",
      },
    },
    followButtonContent: {
      display: "inline-block",
      verticalAlign: "middle",
      lineHeight: "normal",
      fontSize: "inherit    ",
      transition: "transform 0.4s ease 0s",
    },
    /* User Information End */
    "@media (min-width: 769px)": {
      //   main: {
      //     width: "calc(100% + 1rem)",
      //   },
    },
  })
);
