import { Component } from "react";
// import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
const classes = {
  root: {
    backgroundColor: "blue",
  },
};
export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div style={classes.root}>
        <div style={classes.container}>
          <nav style={classes.nav}></nav>
          <div style={classes.palette}></div>
        </div>
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
