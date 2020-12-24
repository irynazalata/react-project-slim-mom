import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from '../Notification/Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <CSSTransition
      in={false}
      appear={true}
      timeout={250}
      classNames={styles}
      unmountOnExit
    >
      <p className={styles.notification}>{message}</p>
    </CSSTransition>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

Notification.defaultProps = {
  message: 'Регистрация прошла успешно',
};

export default Notification;
