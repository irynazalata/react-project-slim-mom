import React, { Component } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "../../App.css";
// import { connect } from "react-redux";
export default class Header extends Component {
  render() {
    return (
      <>
        <Logo />
        <div className="vectorOfHeader"></div>
        <div className="navContainer">
          <p className="loginLink">Вход</p>
          <p className="loginLink">Регистрация</p>
        </div>
      </>
    );
  }
}

// const mapStateToProps = (state) => ({
//   isAuth: state.auth.token,
// });

// {
//   !this.props.isAuth ? (
//     <NavLink className="loginLink" to="/login">
//       Вход
//     </NavLink>
//   ) : (
//     <NavLink className="loginLink" to="/">
//       Name
//     </NavLink>
//   );
// }
// {
//   !this.props.isAuth ? (
//     <NavLink className="loginLink" to="/registration ">
//       Регистрация
//     </NavLink>
//   ) : (
//     <NavLink className="loginLink" to="/">
//       Выйти
//     </NavLink>
//   );
// }
