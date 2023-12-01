import "./styles.css";
//test commit
import Palette from "./colorApp/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorApp/colorHelper";

export default function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <div className="App">
      <Palette {...seedColors[2]} />
    </div>
  );
}
