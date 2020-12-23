import React from "react";
import DiaryDateCalendar from "../../components/DiaryDateCalendar/DiaryDateCalendar.jsx";
import DiaryAddProductForm from "../../components/DiaryAddProductForm/DiaryAddProductForm.js";
import DiaryAddProductList from "../../components/DiaryProductsList/DiaryProductList.js";
import RightSideBar from "../../components/RightSideBar/RightSideBar.js";
import Container from "../../shared/Container/Container.js";
import Header from "../../components/Header/Header";

import styles from "./diary.module.css";

const DiaryPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.containerInformation}>
          <DiaryDateCalendar />
          <DiaryAddProductForm />
          <DiaryAddProductList />
          <button className={styles.button}></button>
        </div>
        <RightSideBar />
      </div>
    </>
  );
};
export default DiaryPage;
