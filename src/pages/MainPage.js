import React, {Component} from 'react';
import DailyCaloriesForm from '../components/DailyCaloriesForm/DailyCaloriesForm';
// import Header from '../components/Header/Header';
import {pageContainer} from './MainPage.module.css';
import Modal from "../shared/Modal/Modal.js"



class MainPage extends Component {
    state = {
      showModal: false,
    }
  
    modalToggle = () => {
      this.setState((prevState) => ({ showModal: !prevState.showModal }))
    }
render(){
return (
    <>
        <div className={pageContainer}>
            {/* <Header/> */}
            <DailyCaloriesForm onShowModal={this.modalToggle}/>
            {this.state.showModal && <Modal onModalToggle={this.modalToggle} />}
            
      </div>
    </>
)}
}
export default MainPage;
