import React, { Component } from 'react';
import DailyCaloriesForm from '../components/DailyCaloriesForm/DailyCaloriesForm';
import Notification from '../shared/Notification/Notification';
import Modal from '../shared/Modal/Modal.js';
import Header from '../components/Header/Header';
import { pageContainer, bgContainer } from './MainPage.module.css';

class MainPage extends Component {
  state = {
    showModal: false,
  };

  modalToggle = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };
  render() {
    return (
      <>
      <Notification />
        <div className={bgContainer}>
          <Header />
          <div className={pageContainer}>
            <DailyCaloriesForm onShowModal={this.modalToggle} />
            {this.state.showModal && <Modal onModalToggle={this.modalToggle} />}
          </div>
        </div>
      </>
    );
  }
}
export default MainPage;
