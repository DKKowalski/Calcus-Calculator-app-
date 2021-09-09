import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="theme__num">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div className="title__container">
        <div className="header__left">calc</div>
        <div className="header__right">
          <div className="header__theme">THEME</div>
          <div className="theme__but">
            <div className="red__but"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
