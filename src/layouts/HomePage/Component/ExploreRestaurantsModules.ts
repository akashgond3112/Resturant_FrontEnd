import { createStyles, makeStyles } from "@mui/styles";

export const useExploreRestauranStyles = makeStyles(() =>
  createStyles({
    image: {
      backgroundImage:
        "url(.Images/PublicImages/Resturant_Navbar.jpg)",
      opacity: "var(--mainOpacity)",
      height: "25em !important",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  })
);
