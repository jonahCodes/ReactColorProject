import { Component } from "react";
import ColorBox from "./ColorBox";
import { Navbar } from "./NavBar";
import PaletteFooter from "./PaletteFooter";

import "./palette.css";
export default class Palette extends Component {
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
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        key={color.id}
        background={color[format]}
        name={color.name}
        id={color.id}
        paletteId={id}
        showLink={true}
        moreUrl={`/palette/${id}/${color.id}`}
      />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          handleChange={this.changeFormat}
          changeLevel={this.changeLevel}
          showingSlider={true}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter emoji={emoji} paletteName={paletteName} />
      </div>
    );
  }
}
