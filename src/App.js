import React, { Component } from 'react';
import Modal from './shared/Modal/Modal';
import DailyCalorieIntake from './components/DailyCalorieIntake/DailyCalorieIntake';

class App extends Component {
  state = {
    showModal: true,
  };
  modalToggle = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };
  render() {
    return (
      <>
        <h1>Hello world</h1>
        {this.state.showModal && <Modal onModalToggle={this.modalToggle} />}
      </>
    );
  }
}
export default App;
