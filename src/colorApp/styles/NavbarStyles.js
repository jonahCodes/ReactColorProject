export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":
      {
        backgroundColor: "red",
        outline: "none",
        border: "2px solid orange",
        boxShadow: "none",
        width: "13px",
        height: "13px",
        marginLeft: "-7px",
        marginTop: "-3px",
      },
  },
  SelectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
};
