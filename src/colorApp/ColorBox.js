import { Link } from "react-router-dom";
import { Component } from "react";
import { withStyles } from "react-jss";
import { CopyToClipboard } from "react-copy-to-clipboard/";
import chroma from "chroma-js";
import "./colorbox.css";

const styles = {
  ColorBox: {
    width: " 20%",
    height: (props) => (props.showFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: " inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.9px",
    "&:hover button": {
      opacity: "1",
    },
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.509 ? "black" : "white",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.079 ? "white" : "black",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.509 ? "black" : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: "30px",
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.509 ? "black" : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1.3rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    opacity: "0",
  },
};
class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
  }
  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  };
  render() {
    const { name, background, moreUrl, showFullPalette, classes } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.ColorBox}>
          <div
            style={{ background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1 className="copy-msgh1">copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>copy</button>
          </div>
          {showFullPalette && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className={classes.seeMore}>more</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
