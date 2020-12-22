import React from "react";
// import { NavLink } from 'react-router-dom';
import styles from "./UserInfo.module.css";
import verticalLine from "../../images/vertical-line.png";
import goBack from "../../images/go-back.png";

// import { connect } from "react-redux";

const UserInfo = ({ name, onLogout }) => (
  <div className={styles.userBox}>
    <img className={styles.goBack} src={goBack} alt="go-back" />
    <div className={styles.userInfo}>
      <span className={styles.name}>Nic</span>
      <img className={styles.verticalLine} src={verticalLine} alt="vertical-line" />
      <span className={styles.logout} onClick={onLogout}>
        Выйти
      </span>
    </div>
  </div>
);

// const mapStateToProps = (state) => ({
//   name: authSelectors.getUserName(state),
//   avatar: "https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg",
// });

// export default connect(mapStateToProps, { onLogout: authOperations.logOut })(UserInfo);
export default UserInfo;
