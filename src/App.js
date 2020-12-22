import React, { Component } from "react";
import Modal from "./shared/Modal/Modal";
import LoginForm from "./components/LoginForm/LoginFormContainer";

class App extends Component {
  state = {
    showModal: false,
  };
  modalToggle = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };
  render() {
    return (
      <>
        <h1>Hello world</h1>
        <LoginForm />
        {this.state.showModal && <Modal onModalToggle={this.modalToggle} />}
      </>
    );
  }
}
export default App;
