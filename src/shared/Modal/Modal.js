import React, { Component } from 'react';
import styles from '../Modal/Modal.module.css';
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
    if (event.code === 'Escape') {
      this.props.onModalToggle();
    } else {
      this.props.onModalToggle();
    }
  };

  render() {
    return (
      <>
        <div id="overlay" className={styles.overlay}>
          <div className={styles.modal}>
            <button
              type="button"
              onClick={this.props.onModalToggle}
              className={styles.closeModalBtn}
              type="button"
            >
              X
            </button>
            <DailyCalorieIntake />
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
