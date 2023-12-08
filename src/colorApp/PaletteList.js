import { withStyles } from "react-jss";
import { Component } from "react";
// import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

const styles = {
  root: {
    backgroundColor: "blue",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
  },
  palettes: {
    display: "grid",
    boxSizing: "border-box",
    width: "100%",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%",
  },
};
class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React ColorApp</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette, index) => (
              <p key={index}>
                <MiniPalette {...palette} />
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
