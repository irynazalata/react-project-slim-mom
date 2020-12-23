import React from "react";
// import { NavLink } from 'react-router-dom';
import styles from "./UserInfo.module.css";
import verticalLine from "../../images/vertical-line.png";
import goBack from "../../images/go-back.png";
// import { NavLink } from "react-router-dom";
import { authOperations, authSelectors } from "../../redux/auth";
import { connect } from "react-redux";

const UserInfo = ({ name, onLogout }) => (
  <div className={styles.userBox}>
    <img className={styles.goBack} src={goBack} alt="go-back" />
    <div className={styles.userInfo}>
      <span className={styles.name}>{name}</span>
      <img
        className={styles.verticalLine}
        src={verticalLine}
        alt="vertical-line"
      />
      <button type="button" className={styles.logout} onClick={onLogout}>
        Выйти
      </button>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserInfo
);
