import React from 'react';
import LoginForm from '../components/LoginForm/LoginFormContainer';
import Header from '../components/Header/Header';
import { pageContainer, bgContainer } from './LoginRegistrationPage.module.css';

const LoginPage = () => (
    <>
        <div className={bgContainer}>
          <Header />
        <div className={pageContainer}>
          <LoginForm />
        </div>
      </div>
  </>
);

export default LoginPage;
