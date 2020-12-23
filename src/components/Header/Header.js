import React, { Component } from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import { authSelectors } from '../../redux/auth';

class Header extends Component {
  render() {
    return (
      <>
        {!this.props.isAuthenticated && (
          <div className={styles.headerContainer}>
            <Logo />

            <div className={styles.navContainer}>
              <NavLink className={styles.loginLink} to="/auth/login">
                Вход
              </NavLink>
              <NavLink className={styles.loginLink} to="/auth/register">
                Регистрация
              </NavLink>
            </div>
          </div>
        )}

        {this.props.isAuthenticated && <Navigation />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps, null)(Header);
