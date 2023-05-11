import { createStyles, makeStyles } from "@mui/styles";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

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
