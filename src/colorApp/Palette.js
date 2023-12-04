import { Component } from "react";
import ColorBox from "./ColorBox";
import { Navbar } from "./NavBar";
import "./palette.css";
export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
    };
  }
  changeLevel = (level) => {
    this.setState({ level });
  };
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((color, index) => (
      <ColorBox key={index} background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} />
        {/* navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer goes here */}
      </div>
    );
  }
}
