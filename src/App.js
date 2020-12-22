import React, {Component} from 'react';
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo.js";
import Modal from './shared/Modal/Modal';
import "./App.css";

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
      <div className="headerContainer">
        <Header />
      </div>
      <div className="bottomVectorOfHeader"></div>
        <h1>Hello world</h1>
        {this.state.showModal && <Modal onModalToggle={this.modalToggle} />}
      </>
    );
  }
}
export default App;

