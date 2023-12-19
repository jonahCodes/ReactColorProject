import * as React from "react";
import { withStyles } from "react-jss";
const styles = {
  root: {
    width: " 20%",
    height: "25%",
    margin: "0 auto",
    display: " inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.9px",
  },
};
function DraggableColorBox(props) {
  return (
    <div
      className={props.classes.root}
      style={{ backgroundColor: props.color }}
    >
      {props.name}
    </div>
  );
}
export default withStyles(styles)(DraggableColorBox);
