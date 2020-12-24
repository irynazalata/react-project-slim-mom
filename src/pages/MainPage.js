import React, { Component } from 'react';
import DailyCaloriesForm from '../components/DailyCaloriesForm/DailyCaloriesForm';
import Notification from '../shared/Notification/Notification';
import Modal from '../shared/Modal/Modal.js';
import Header from '../components/Header/Header';
import { pageContainer, bgContainer } from './MainPage.module.css';
import styles from '../shared/Modal/Modal.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
        <Notification />
        <div className={bgContainer}>
          <Header />
          <div className={pageContainer}>
            <DailyCaloriesForm onShowModal={this.modalToggle} />
            <CSSTransition
              in={showModal}
              timeout={500}
              classNames={styles}
              unmountOnExit
            >
              {showModal && <Modal onModalToggle={this.modalToggle} />}
            </CSSTransition>
          </div>
        </div>
      </>
    );
  }
}
export default MainPage;
