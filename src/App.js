import React, {Component} from 'react';
import  DiaryAddProductForm from './components/DiaryAddProductForm/DiaryAddProductForm'
import Modal from './shared/Modal/Modal';

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
        <DiaryAddProductForm/>
      </>
    );
  }
}
export default App;

