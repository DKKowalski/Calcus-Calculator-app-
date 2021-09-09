import React from "react";
import "./Screen.css";

function Screen() {
  return (
    <div className="screen">
      <input type="text" name="calc" readonly className="screen__input" />
    </div>
  );
}

export default Screen;
