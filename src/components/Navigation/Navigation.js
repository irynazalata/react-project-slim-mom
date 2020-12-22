import React from "react";
import styles from "./Navigation.module.css";
import Container from "../../shared/Container/Container";
import UserInfo from "../UserInfo/UserInfo";
import verticalLine from "../../images/vertical-line.png";
import NavState from "./NavState";
import MainMenu from "./MainMenu";

// import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Container>
        <div className={styles.boxTablet}>
          <div className={styles.logo}>LOGO</div>
          <div className={styles.userInfoTablet}>
            <UserInfo />
          </div>
          <div className={styles.burgerMenu}>
            <NavState>
              <MainMenu />
            </NavState>
          </div>
        </div>
      </Container>
      <div className={styles.boxDesktop}>
        <div className={styles.regularMenu}>
          <div className={styles.logoDesktop}>LOGO</div>
          <img className={styles.verticalLine} src={verticalLine} alt="" />
          <p className={styles.desktopLink}>ДНЕВНИК</p>
          <p className={styles.desktopLink}>КАЛЬКУЛЯТОР</p>
        </div>

        <div className={styles.userInfoDesktop}>
          <UserInfo />
        </div>
      </div>

      <div className={styles.userInfo}>
        <UserInfo />
      </div>
    </>
  );
}

export default Navigation;
