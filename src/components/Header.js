import React from "react";
import logo from "./assets/logo.png";

function Header() {
  return (
    <header className="header layout">
      <img alt="logo" className="header-logo" src={logo} />
      <h1 className="header-title">Generador de CV</h1>
    </header>
  );
}

export default Header;
