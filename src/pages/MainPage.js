import React from 'react';
import DailyCaloriesForm from '../components/DailyCaloriesForm/DailyCaloriesForm';
// import Header from '../components/Header/Header';
import {pageContainer} from './MainPage.module.css';

const MainPage = () => (
    <>
        <div className={pageContainer}>
            {/* <Header/> */}
            <DailyCaloriesForm />
      </div>
    </>
);

export default MainPage;
