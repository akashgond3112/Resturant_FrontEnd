import { createStyles, makeStyles } from "@mui/styles";

export const useLoginRegisterPageStyles = makeStyles(() =>
  createStyles({
    main: {
      textAlign: "center",
      display: "flex",
      minHeight: "100vh",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage:
        "linear-gradient(79deg,rgb(239 178 184),rgb(243 210 214) 8%,rgb(255, 255, 255))",
    },
    authFormContainer: {
      display: "flex",
      flexDirection: "column",
    },
    input: {
      margin: "0.5rem 0",
      padding: "1rem",
      border: "none",
      borderRadius: "10px",
    },
    label: {
      textAlign: "left",
      padding: "0.25rem 0",
    },
    linkBtn: {
      border: "none",
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "bold",
      background: "none",
      textDecoration: "underline",
      marginTop: "1rem",
    },
    "@media (min-width: 769px)": {},
  })
);
