import React, { Component } from 'react';
import DailyCaloriesForm from '../components/DailyCaloriesForm/DailyCaloriesForm';
import Modal from '../shared/Modal/Modal';
// import Header from '../components/Header/Header';
import { pageContainer } from './MainPage.module.css';

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
        <div className={pageContainer}>
          {/* <Header/> */}
          <DailyCaloriesForm onShowModal={this.modalToggle} />
          {this.state.showModal && <Modal onModalToggle={this.modalToggle} />}
        </div>
      </>
    );
  }
}
export default MainPage;
