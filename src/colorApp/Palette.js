import { Component } from "react";
import ColorBox from "./ColorBox";
import "./palette.css";
export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color, index) => (
      <ColorBox key={index} background={color.color} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer goes here */}
      </div>
    );
  }
}
