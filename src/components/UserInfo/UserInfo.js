import React from "react";
import styles from "./UserInfo.module.css";
import verticalLine from "../../images/vertical-line.png";
import { authOperations, authSelectors } from "../../redux/auth";
import { connect } from "react-redux";

const UserInfo = ({ name, onLogout }) => (
  <div className={styles.userBox}>
    <div className={styles.userInfo}>
      <span className={styles.name}>{name}</span>
      <img className={styles.verticalLine} src={verticalLine} alt="vertical-line" />
      <button type="button" className={styles.logout} onClick={onLogout}>
        Выйти
      </button>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(UserInfo);
