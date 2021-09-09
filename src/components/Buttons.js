import React from "react";
import "./Buttons.css";

function Buttons() {
  return (
    <div className="btns">
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="Del__btn">DEL</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button>/</button>
      <button>x</button>
      <button className="reset__btn">RESET</button>
      <button className="equal__btn">=</button>
    </div>
  );
}

export default Buttons;
