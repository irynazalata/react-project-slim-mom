import React, {Component} from 'react';
import  DiaryAddProductForm from './components/DiaryAddProductForm/DiaryAddProductForm'
import Modal from './shared/Modal/Modal';
import LoginForm from './components/LoginForm/LoginFormContainer'

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
        <h1>Hello world</h1>
        {this.state.showModal && <Modal onModalToggle={this.modalToggle} />}
        <LoginForm/>
        <DiaryAddProductForm/>
      </>
    );
  }
}
export default App;

