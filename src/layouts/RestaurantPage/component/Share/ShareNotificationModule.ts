// import { makeStyles } from "@mui/styles";
import { makeStyles } from "tss-react/mui";

/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

export const useShareNotificationStyles = makeStyles<{
  stylesProps: boolean;
}>()((_theme, { stylesProps }) => ({
  shareNotificationContainer: {
    fontSize: "1.2rem",
  },
  shareNotificationContent: {
    marginRight: "2rem",
    marginTop: "0.2rem",
    fontSize: "1.8rem",
    fontWeight: "300",
  },
  shareNotificationImage: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  shareNotificationSvg: {
    display: "inline-block",
    verticalAlign: "middle",
    lineHeight: "1",
    width: "20px",
    height: "20px",
  },
  shareNotificationHolder: {
    position: "fixed",
    opacity: stylesProps ? "1" : "0",
    visibility: stylesProps ? "visible" : "hidden",
    display: "flex",
    transition: "all 0.5s ease 0s",
    justifyContent: "space-between",
    padding: "1.4rem",
    width: "max-content",
    minWidth: "50rem",
    maxWidth: "900px",
    fontWeight: "300",
    borderRadius: "0.6rem",
    background: stylesProps ? "rgb(235, 255, 239)" : "rgb(248, 248, 248)",
    color: stylesProps ? "rgb(36, 150, 63)" : "rgb(28, 28, 28)",
    bottom: stylesProps ? "" : "5%",
    top: stylesProps ? "calc(5% + 0rem)" : "",
    left: "50%",
    transform: "translate(-50%, 0px)",
    zIndex: 20,
  },
}));
