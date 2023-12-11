import { Component } from "react";
import ColorBox from "./ColorBox";
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
    const { paletteName, emoji } = this.props.palette;
    const { format } = this.state;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <Navbar handleChange={this.changeFormat} showingSlider={false} />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
