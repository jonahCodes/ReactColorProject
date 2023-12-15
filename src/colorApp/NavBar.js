import { Component } from "react";
import MenuItem from "@mui/material/MenuItem";
import Slider from "rc-slider";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import withStyles from "react-jss";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import styles from "./styles/NavbarStyles";
import "rc-slider/assets/index.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false,
    };
  }
  handleFormatChange = (e) => {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  };
  closeSnackBar = () => {
    this.setState({ open: false });
  };
  render() {
    const { level, changeLevel, showingSlider, classes } = this.props;
    const { format, open } = this.state;
    console.log(classes);
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">reactColorApp</Link>
        </div>
        {showingSlider && (
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onChangeComplete={changeLevel}
              />
            </div>
          </div>
        )}

        <div className={classes.SelectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255, 0,3)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              FormateChanged To {format.toUpperCase()}
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          onClose={this.closeSnackBar}
          action={[
            <IconButton
              key="close"
              aria-label="close"
              onClick={this.closeSnackBar}
              color="inherit"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}
export default withStyles(styles)(Navbar);
