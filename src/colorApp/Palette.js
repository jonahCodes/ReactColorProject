import { Component } from "react";
import ColorBox from "./ColorBox";
import { Navbar } from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import withStyles from "react-jss";

import "./palette.css";
const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  Colors: {
    height: "90%",
  },
};
class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex",
    };
  }
  changeLevel = (level) => {
    this.setState({ level });
  };
  changeFormat = (val) => {
    this.setState({ format: val });
  };
  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const { classes } = this.props;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        key={color.id}
        background={color[format]}
        name={color.name}
        id={color.id}
        paletteId={id}
        showFullPalette={true}
        moreUrl={`/palette/${id}/${color.id}`}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          handleChange={this.changeFormat}
          changeLevel={this.changeLevel}
          showingSlider={true}
        />
        <div className={classes.Colors}>{colorBoxes}</div>
        <PaletteFooter emoji={emoji} paletteName={paletteName} />
      </div>
    );
  }
}
export default withStyles(styles)(Palette);
