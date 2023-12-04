import { Component } from "react";
import Slider from "rc-slider";
import Select from "@mui/material/Select";
import "rc-slider/assets/index.css";

import "./navbar.css";
import MenuItem from "@mui/material/MenuItem";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
    };
  }
  handleChange = (e) => {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
  };
  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="/">reactColorApp</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onChangeComplete={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255, 0,3)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}
