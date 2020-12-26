import React, { useState } from "react";
import { useSelector } from "react-redux";
import DailyCaloriesForm from "../components/DailyCaloriesForm/DailyCaloriesForm";
import Modal from "../shared/Modal/Modal.js";
import Header from "../components/Header/Header";
import { pageContainer, bgContainer } from "./MainPage.module.css";
import Loader from "../shared/Loader/Loader";
import getLoader from "../redux/loader/loaderSelectors";
import styles from "../shared/Modal/Modal.module.css";
import { CSSTransition } from "react-transition-group";

const MainPage = function () {
  const [showModal, setShowModal] = useState(false);
  const loader = useSelector(getLoader);

modalToggle = () => {
    setShowModal((prevState) => !prevState.showModal);
  };

  modalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <div className={bgContainer}>
          <Header />
          <div className={pageContainer}>
            <DailyCaloriesForm onShowModal={this.modalToggle} />

            <div
              id="overlay"
              className={showModal ? styles.overlay : styles.notShow}
            >
              <CSSTransition
                in={showModal}
                timeout={300}
                classNames={styles}
                unmountOnExit
              >
                <Modal onModalToggle={this.modalClose} />
              </CSSTransition>
            </div>
          </div>
        </div>
        <Notification>Выход выполнен успешно</Notification>
      </>
    );
  }
}
export default MainPage;
