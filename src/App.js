import "./styles.css";
//test commit
import Palette from "./colorApp/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorApp/colorHelper";

export default function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}
