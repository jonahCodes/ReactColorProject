import { Component } from "react";
import ColorBox from "./ColorBox";
import { Navbar } from "./NavBar";
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
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color, index) => (
      <ColorBox key={index} background={color[format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          handleChange={this.changeFormat}
          changeLevel={this.changeLevel}
        />
        {/* navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer goes here */}
      </div>
    );
  }
}
