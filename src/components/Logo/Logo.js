import React, { Component } from "react";
import logo from "../../images/desktop/logo-desktop-x1-min.png";
import "./Logo.css";
export default class Logo extends Component {
  render() {
    return (
      <div className="logoContainer">
        {/* <NavLink  to="/diaryPage"> <img src={logo} className="logoImage" /></NavLink> */}
        <img src={logo} className="logoImage" />
        <p className="logoTextSlim">Slim </p>
        <p className="logoTextMom ">Mom </p>
      </div>
    );
  }
}
