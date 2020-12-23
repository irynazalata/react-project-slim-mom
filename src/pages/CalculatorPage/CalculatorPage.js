import React from 'react';
import CalculatorCalorieForm from '../../components/DailyCaloriesForm/DailyCaloriesForm';
import Header from '../../components/Header/Header';

import styles from '../DiaryPage/diary.module.css';

const CalculatorPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.CalculatorCalorieFormBox}>
          <CalculatorCalorieForm />
        </div>
        <RightSideBar />
      </div>
    </>
  );
};

export default CalculatorPage;
