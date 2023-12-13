import { Component } from "react";
import ColorBox from "./ColorBox";
import { Link } from "react-router-dom";
import { Navbar } from "./NavBar";
import withStyles from "react-jss";
import PaletteFooter from "./PaletteFooter";
const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  Colors: {
    height: "90%",
  },
  goBack: {
    width: " 20%",
    height: "50%",
    margin: "0 auto",
    display: " inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.9px",
    opacity: "1",
    backgroundColor: "black",
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1.0rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      textDecoration: "none",
      padding: "5px 5px 5px 5px",
    },
  },
};
class ColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorid);
    this.state = {
      format: "hex",
    };
  }
  gatherShades = (paletteName, idColor) => {
    //return all shades given color
    let shades = [];
    let allColor = paletteName.colors;
    for (let key in allColor) {
      shades = shades.concat(
        allColor[key].filter((color) => color.id === idColor),
      );
    }
    return shades.slice(1);
  };
  changeFormat = (val) => {
    this.setState({ format: val });
  };
  render() {
    const { classes } = this.props;
    const { paletteName, emoji, id } = this.props.palette;
    const { format } = this.state;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showFullPalette={false}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar handleChange={this.changeFormat} showingSlider={false} />
        <div className={classes.Colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link
              to={`/palette/${id}`}
              className="back-button"
              id="back-button"
            >
              GO BACK
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
export default withStyles(styles)(ColorPalette);
