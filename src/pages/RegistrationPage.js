import React from 'react';
import Header from '../components/Header/Header';
import Logo from '../components/Logo/Logo';
import RegistrationForm from '../components/RegistrationForm/RegistrationFormContainer';
import { pageContainer, bgContainer, headerHide, logoHide } from './LoginRegistrationPage.module.css';



const RegistrationPage = () => (
    <>
      <div className={bgContainer}>
      <div className={headerHide}>
          <Header />
      </div>
            <div className={logoHide}>
          <Logo />
      </div>
        <div className={pageContainer}>
          <RegistrationForm />
        </div>
    </div>
  </>
);

export default RegistrationPage;
