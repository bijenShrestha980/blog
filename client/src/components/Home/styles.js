import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 15,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
    boxShadow: "none",
  },
  pagination: {
    borderRadius: 15,
    marginTop: "1rem",
    padding: "16px",
    boxShadow: "none",
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  searchButton: {
    borderRadius: 8,
  },
}));
