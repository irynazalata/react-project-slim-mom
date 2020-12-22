import React from 'react';
import styles from './MainPage.module.css';

const MainPage = ({ children }) => (
    <>
        <div className={styles.container}>
            {children}
        </div>
    </>
);

export default MainPage;
