import React, { Component } from 'react';
import DiaryAddProductForm from './DiaryAddProductForm.js';
import styles from '../../shared/Modal/Modal.module.css';

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
    console.dir(event.target);
    if (event.target.nodeName === "INPUT" || event.target.nodeName === "LI" || event.target.innerText === "Добавить") {
      return
    }
    if (event.code === 'Escape') {
      this.props.onModalToggle();
    }
    else {
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
            <DiaryAddProductForm />
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
