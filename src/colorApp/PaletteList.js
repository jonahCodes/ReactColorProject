import { Component } from "react";
// import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>hello</h1>
        {palettes.map((palette, index) => (
          <p key={index}>
            <MiniPalette {...palette} />
          </p>
        ))}
      </div>
    );
  }
}
