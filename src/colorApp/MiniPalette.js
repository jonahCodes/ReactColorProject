import { Component } from "react";
const classes = {
  root: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hidden": {
      cursor: "pointer",
    },
  },
  colors: {
    backgroundColor: "none",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
};
export default class MiniPalette extends Component {
  render() {
    const { paletteName, emoji } = this.props;
    return (
      <div style={classes.root}>
        <div style={classes.colors}>
          <h5 style={classes.title}>
            {paletteName}
            <span style={classes.emoji}>{emoji}</span>
          </h5>
        </div>
      </div>
    );
  }
}
