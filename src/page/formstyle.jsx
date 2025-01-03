import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    marginTop: "40px",
    padding: "8px",
    borderColor: "#fff",
    borderWidth: "1px",
    borderRadius: "8px",
    backgroundColor: "transparent",
  },
  title: {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  submitButton: {
    backgroundColor: "#1976d2",
    color: "white",
    "&:hover": {
      backgroundColor: "#1565c0",
    },
  },
});

export default useStyles;
