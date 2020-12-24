import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from '../Notification/Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ children }) => {
  return (
    <CSSTransition
      in={false}
      appear={true}
      timeout={250}
      classNames={styles}
      unmountOnExit
    >
      <div className={styles.notification}>{children}</div>
    </CSSTransition>
  );
};

Notification.propTypes = {
  children: PropTypes.string.isRequired,
};

Notification.defaultProps = {
  children: 'Регистрация прошла успешно',
};

export default Notification;
