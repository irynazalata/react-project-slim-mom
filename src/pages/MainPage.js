import React, { Component } from 'react';
import DailyCaloriesForm from '../components/DailyCaloriesForm/DailyCaloriesForm';
import Notification from '../shared/Notification/Notification';
import Modal from '../shared/Modal/Modal.js';
import Header from '../components/Header/Header';
import { pageContainer, bgContainer } from './MainPage.module.css';
import styles from '../shared/Modal/Modal.module.css';
import { CSSTransition } from 'react-transition-group';

class MainPage extends Component {
  state = {
    showModal: false,
  };

  modalToggle = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <>
        <div className={bgContainer}>
          <Header />
          <div className={pageContainer}>
            <DailyCaloriesForm onShowModal={this.modalToggle} />

            <div
              id="overlay"
              className={showModal ? styles.overlay : styles.notShow}
            >
              <CSSTransition
                in={showModal}
                timeout={300}
                classNames={styles}
                unmountOnExit
              >
                <Modal onModalToggle={this.modalToggle} />
              </CSSTransition>
            </div>
          </div>
        </div>
        <Notification>Выход выполнен успешно</Notification>
      </>
    );
  }
}
export default MainPage;
