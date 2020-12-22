import React, { Component } from 'react';
import Modal from './shared/Modal/Modal';

import Lol from "./pages/DiaryPage/DiaryPage.js"

class App extends Component {
  state = {
    showModal: false,
  };
  modalToggle = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };
  render() {
    return (
      <>
        {/* <h1>Hello world</h1>
        {this.state.showModal && <Modal onModalToggle={this.modalToggle} />} */}
        <Lol/>
      </>
    );
  }
}
export default App;

