import { withStyles } from "react-jss";
import { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React ColorApp</h1>
            <Link to="/palette/new">Create</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette, index) => (
              <div key={index}>
                <MiniPalette
                  {...palette}
                  handleGoTo={() => this.goToPalette(palette.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
