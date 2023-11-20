import "./styles.css";
import Palette from "./colorApp/Palette";
import seedColors from "./seedColors";
export default function App() {
  return (
    <div className="App">
      <Palette {...seedColors[2]} />
    </div>
  );
}
