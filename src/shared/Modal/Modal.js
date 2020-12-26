import React, { Component } from 'react';
import styles from '../Modal/Modal.module.css';
import closeModalBtn from '../../images/close-burger-menu.png';
import goBackBtn from '../../images/go-back.png';
import DailyCalorieIntake from '../../components/DailyCalorieIntake/DailyCalorieIntake';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
    document
      .getElementById('overlay')
      .addEventListener('click', this.closeModalOverlay);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
    document
      .getElementById('overlay')
      .removeEventListener('click', this.closeModalOverlay);
  }
  closeModal = event => {
    this.removeScroll();
    const { onModalToggle } = this.props;
    if (event.code === 'Escape') {
      onModalToggle();
    }
  };

  removeScroll = () => {
    console.log('Hi');
    document.body.classList.remove('stopScroll');
  };

  render() {
    const { onModalToggle } = this.props;
    return (
      <>
        <div className={styles.modal}>
          <button
            type="button"
            onClick={onModalToggle}
            className={styles.closeModalBtn}
          >
            <img
              src={closeModalBtn}
              alt="close-modal"
              className={styles.closeModalImg}
            />
            <img
              src={goBackBtn}
              alt="close-modal"
              className={styles.goBackImg}
            />
          </button>

          <DailyCalorieIntake />
        </div>
      </>
    );
  }
}

export default Modal;
