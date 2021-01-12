import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import DailyCaloriesForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import Modal from '../../shared/Modal/Modal.js';
import Header from '../../components/Header/Header';
import Loader from '../../shared/Loader/Loader';
import Notification from '../../shared/Notification/Notification';
import styles from '../../shared/Modal/Modal.module.css';
import { pageContainer, bgContainer } from './MainPage.module.css';

class MainPage extends Component {
  state = {
    showModal: false,
  };

  modalToggle = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };
  modalClose = () => {
    this.setState({ showModal: false });
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
                <Modal onModalToggle={this.modalClose} />
              </CSSTransition>
            </div>
          </div>
        </div>
        <Notification>
          <span>Выход выполнен успешно</span>
        </Notification>
        {loader && <Loader />}
      </>
    );
  }
}

export default MainPage;
