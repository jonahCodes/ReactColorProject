import { Component } from "react";
import ColorBox from "./ColorBox";
export default class ColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorid);
  }
  gatherShades(paletteName, idColor) {
    //return all shades given color
    let shades = [];
    let allColor = paletteName.colors;
    for (let key in allColor) {
      shades = shades.concat(
        allColor[key].filter((color) => color.id === idColor),
      );
    }
    return shades.slice(1);
  }
  render() {
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color.hex}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <h1>single Color</h1>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
