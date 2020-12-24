import React from 'react';
import Header from '../components/Header/Header';
import Logo from '../components/Logo/Logo';
import LoginForm from '../components/LoginForm/LoginFormContainer';
import { pageContainer, bgContainer, headerHide, logoHide } from './LoginRegistrationPage.module.css';

const LoginPage = () => (
    <>
    <div className={bgContainer}>
      <div className={headerHide}>
          <Header />
      </div>
            <div className={logoHide}>
          <Logo />
      </div>
        <div className={pageContainer}>
          <LoginForm />
        </div>
      </div>
  </>
);

export default LoginPage;
