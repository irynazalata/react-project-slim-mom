import React from 'react';
import styles from './LoginRegistrationPage.module.css';

const LoginPage = ({ children }) => (
    <>
        <div className={styles.container}>
            {children}
        </div>
    </>
);

export default LoginPage;