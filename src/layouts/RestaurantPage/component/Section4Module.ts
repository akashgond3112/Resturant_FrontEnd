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
      borderRadius: "hidden",
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
    /* Rating section start */
    ratingContainer: {
      display: "flex",
      margin: "1.8rem 0px 1rem",
      alignItems: "center",
      flexGrow: 0,
      flexShrink: 0,
    },
    ratingMain: {
      display: "flex",
      alignItems: "center",
      fontSize: "inherit",
      cursor: "unset",
    },
    ratingHolder: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "rgb(255, 255, 255)",
      height: "1.6rem",
      minWidth: "3rem",
      padding: "0px 0.4rem",
      fontSize: "1rem",
      borderRadius: "0.6rem",
      border: "1px solid rgb(14, 80, 32)",
    },
    ratingHolderPrimary: {
      display: "block",
      fontSize: "inherit",
    },
    ratingHolderPrimaryContent: {
      display: "flex",
      alignItems: "center",
      fontSize: "inherit",
      cursor: "unset",
    },
    ratingNumber: {
      marginRight: "0.2rem",
      fontWeight: "600",
      fontSize: "inherit",
      paddingBottom: "0.1rem",
    },
    ratingStarContainer: {
      marginLeft: "0px",
    },
    ratingStarPrimary: {
      display: "flex",
      alignItems: "center",
      cursor: "inherit",
    },
    ratingStarSecondary: {
      display: "inline-block",
      verticalAlign: "middle",
      lineHeight: 1,
    },
    ratingContent: {
      display: "block",
      fontSize: "inherit",
      marginLeft: "0.8rem",
    },
    ratingContentPrimary: {
      fontWeight: 600,
      fontSize: "1.2rem",
      lineHeight: "1.8rem",
      paddingBottom: "0px",
      borderBottom: "unset",
      color: "rgb(54, 54, 54)",
    },
    ratingContentSecondary: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.6rem",
      paddingBottom: "0px",
      borderBottom: "unset",
      color: "rgb(54, 54, 54)",
    },
    timeStamp: {
      composes: `$ratingContainer`,
      marginLeft: "1rem",
    },
    time: {
      fontSize: "1.1rem",
      lineHeight: "1.5",
      margin: "0px",
      color: "rgb(156, 156, 156)",
      marginLeft: "0.6rem",
    },
    /* Rating section end  */
    /* Customer review start */
    customerReview: {
      lineHeight: "1.5",
      margin: "0.5rem 0px 0.3rem",
      color: "rgb(105, 105, 105)",
      overflow: "break-word",
      fontSize: "1.2rem",
    },
    /*ustomer review end   */
    /* Number of comments and votes helpful start */
    NoOfVotesCommnets: {
      margin: "1rem 0px 0px",
    },
    counts: {
      fontSize: "1.2rem",
      lineHeight: 1.5,
      margin: "0px",
      color: "rgb(156, 156, 156)",
    },
    /* Number of comments and votes helpful end */
    /* Review Action start */
    actionContainer: {
      display: "flex",
      justifyContent: "flex-start",
      borderBottom: "2px solid rgb(113, 113, 113)",
      marginBottom: "2rem",
    },
    helpfulAndShareMain: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      margin: "0.5rem 1.5rem 0.5rem 0px",
      padding: "1rem 0.5rem",
      borderRadius: "6px",
    },
    commentMain: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      margin: "0.5rem 1.5rem 0.5rem 0px",
      padding: "1rem 0.5rem",
      borderRadius: "6px",
      backgroundColor: "transparent",
    },
    symbolPrimary: {
      display: "flex",
      alignItems: "center",
      cursor: "inherit",
      size: "16",
    },
    symbolSecondary: {
      display: "inline-block",
      verticalAlign: "middle",
      lineHeight: "1",
      width: "16px",
      height: "16px",
    },
    actionContent: {
      margin: "0px 0px 0px 0.5rem",
      color: "rgb(156, 156, 156)",
      fontSize: "1.2rem",
    },
    /* Review Action end */
    /* Comment section start*/
    commentImageMain: {
      display: "flex",
      margin: "2rem 0px",
      borderBottom: "2px solid rgb(113, 113, 113)",
    },
    imageContainer: {
      width: "4.4rem",
      height: "4.4rem",
      marginRight: "1rem",
      flexShrink: "0",
    },
    writeCommentContainer: {
      flexGrow: 1,
    },
    writeCommentBoxMain: {
      position: "relative",
      width: "auto",
    },
    writeCommentBoxAreaInactive: {
      padding: "1.3rem 1.2rem",
      background: "rgb(255, 255, 255)",
      border: "0.1rem solid rgb(207, 207, 207)",
      fontSize: "18px",
      width: "100%",
      outline: "none",
      boxSizing: "border-box",
      borderRadius: "0.6rem",
      resize: "none",
      color: "rgb(28, 28, 28)",
      overflow: "hidden",
    },
    writeCommentBoxAreaActive: {
      padding: "1.25rem 1.15rem",
      background: "rgb(255, 255, 255)",
      border: "0.15rem solid rgb(17, 145, 153)",
      fontSize: "18px",
      width: "100%",
      outline: "none",
      boxSizing: "border-box",
      borderRadius: "0.6rem",
      resize: "none",
      color: "rgb(28, 28, 28)",
      overflow: "hidden",
    },
    writeCommentBoxLabelInactive: {
      position: "absolute",
      pointerEvents: "none",
      transition: "all 0.2s ease 0s",
      color: "rgb(181, 181, 181)",
      top: "13px",
      left: "14px",
      fontSize: "18px",
      background: "rgb(255, 255, 255)",
      padding: "0px",
    },
    writeCommentBoxLabelActive: {
      position: "absolute",
      pointerEvents: "none",
      transition: "all 0.2s ease 0s",
      color: "rgb(17, 145, 153)",
      top: "-5px",
      left: "25px",
      fontSize: "10px",
      background: "rgb(255, 255, 255)",
      padding: "0px 5px",
    },
    /* Writing Review section end */
    /* List of Comment Start */
    lsitOfCommentMain: {
      paddingBottom: "0.5rem",
      borderBottom: "2px solid rgb(232, 232, 232)",
    },
    listOfCommentImageMain: {
      display: "flex",
      margin: "2rem 0px",
    },
    commentContainer: {
      flexGrow: 1,
    },
    commentContentMain: {
      fontSize: "1.2rem",
      color: "rgb(54, 54, 54)",
      marginBottom: "  0.8rem",
    },
    commentContentActionContainer: {
      fontSize: "0.8rem",
      color: "rgb(156, 156, 156)",
      display: "flex",
    },
    commentContentActionHolder: {
      display: "flex",
    },
    commentContentAction: {
      margin: "0px 0.5rem",
      color: "rgb(156, 156, 156)",
      fontSize: "0.9rem",
      fontWeight: "500",
      cursor: "pointer",
    },
    /* List of Comment End */
    /* Comment section end*/
    "@media (min-width: 769px)": {
      //   main: {
      //     width: "calc(100% + 1rem)",
      //   },
    },
  })
);
