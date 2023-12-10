import "./styles.css";
//test commit
import { Component } from "react";
import ColorPalette from "./colorApp/ColorPalette";
import Palette from "./colorApp/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorApp/colorHelper";
import PaletteList from "./colorApp/PaletteList";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  findPalette = (id) => {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  };
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={seedColors} {...routeProps} />
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
          render={() => <ColorPalette />}
        />
      </Switch>
    );
  }
}
