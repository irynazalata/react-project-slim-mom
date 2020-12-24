import React, { Component } from 'react';
import styles from '../Modal/Modal.module.css';
import closeModalBtn from '../../images/close-burger-menu.png';
import DailyCalorieIntake from '../../components/DailyCalorieIntake/DailyCalorieIntake';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
    document
      .getElementById('overlay')
      .addEventListener('click', this.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
    document
      .getElementById('overlay')
      .removeEventListener('click', this.closeModal);
  }
  closeModal = event => {
    const { onModalToggle } = this.props;
    if (event.code === 'Escape') {
      onModalToggle();
    } else {
      onModalToggle();
    }
  };

  render() {
    const { onModalToggle } = this.props;
    return (
      <>
        <div id="overlay" className={styles.overlay}>
          <div className={styles.modal}>
            <button
              type="button"
              onClick={onModalToggle}
              className={styles.closeModalBtn}
              type="button"
            >
              <img
                src={closeModalBtn}
                alt="close-modal"
                className={closeModalBtn}
              />
            </button>
            <DailyCalorieIntake />
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
