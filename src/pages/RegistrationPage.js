import React from 'react';
import styles from './LoginRegistrationPage.module.css';

const RegistrationPage = ({ children }) => (
    <>
        <div className={styles.container}>
            {children}
        </div>
    </>
);

export default RegistrationPage;