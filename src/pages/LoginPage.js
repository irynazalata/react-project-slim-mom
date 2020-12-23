import React from 'react';
import LoginForm from '../components/LoginForm/LoginFormContainer';
import Header from '../components/Header/Header';
import {pageContainer} from './LoginRegistrationPage.module.css';

const LoginPage = () => (
    <>
        <div className={pageContainer}>
            <Header/>
            <LoginForm/>
        </div>
    </>
);

export default LoginPage;