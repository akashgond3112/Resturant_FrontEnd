import { makeStyles } from "@mui/styles";

export interface StyleProps {
  visible: boolean;
}

export const useShareNotificationStyles = makeStyles({
  shareNotificationContainer: {
    fontSize: "1.2rem",
  },
  shareNotificationHolder: {
    position: "fixed",
    opacity: (stylesProps: StyleProps) => (stylesProps.visible ? "1" : "0"),
    visibility: (stylesProps: StyleProps) =>
      stylesProps.visible ? "visible" : "hidden",
    display: "flex",
    transition: "all 0.5s ease 0s",
    justifyContent: "space-between",
    padding: "1.4rem",
    width: "max-content",
    minWidth: "50rem",
    maxWidth: "900px",
    fontWeight: "300",
    borderRadius: "0.6rem",
    background: (stylesProps: StyleProps) =>
      stylesProps.visible ? "rgb(235, 255, 239)" : "rgb(248, 248, 248)",
    color: (stylesProps: StyleProps) =>
      stylesProps.visible ? "rgb(36, 150, 63)" : "rgb(28, 28, 28)",
    bottom: (stylesProps: StyleProps) => (stylesProps.visible ? "" : "5%"),
    top: (stylesProps: StyleProps) =>
      stylesProps.visible ? "calc(5% + 0rem)" : "",
    left: "50%",
    transform: "translate(-50%, 0px)",
    zIndex: 20,
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
});
