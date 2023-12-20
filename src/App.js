import "./styles.css";
//test commit
import { Component } from "react";
import ColorPalette from "./colorApp/ColorPalette";
import Palette from "./colorApp/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorApp/colorHelper";
import PaletteList from "./colorApp/PaletteList";
import NewPaletteForm from "./colorApp/NewPaletteForm";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { palettes: seedColors };
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }
  savePalette(newPalette) {
    console.log(newPalette);
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  }
  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={this.state.palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/new"
          render={(routeProps) => (
            <NewPaletteForm savePalette={this.savePalette} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id),
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(routeProps) => (
            <ColorPalette
              colorid={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId),
              )}
            />
          )}
        />
      </Switch>
    );
  }
}
