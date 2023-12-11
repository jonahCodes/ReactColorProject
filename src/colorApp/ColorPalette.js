import { Component } from "react";
import ColorBox from "./ColorBox";
import { Link } from "react-router-dom";
import { Navbar } from "./NavBar";
import PaletteFooter from "./PaletteFooter";
export default class ColorPalette extends Component {
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
    const { paletteName, emoji, id } = this.props.palette;
    const { format } = this.state;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="SingleColor Palette">
        <Navbar handleChange={this.changeFormat} showingSlider={false} />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="go-back ColorBox">
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
