import { Component } from "react";
import { Link } from "react-router-dom";
export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>hello</h1>
        {palettes.map((palette, index) => (
          <p key={index}>
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          </p>
        ))}
      </div>
    );
  }
}
