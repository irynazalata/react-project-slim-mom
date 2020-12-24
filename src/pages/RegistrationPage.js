import React from 'react';
import Header from '../components/Header/Header';
import RegistrationForm from '../components/RegistrationForm/RegistrationFormContainer';
import { pageContainer, bgContainer } from './LoginRegistrationPage.module.css';


const RegistrationPage = () => (
    <>
      <div className={bgContainer}>
        <Header />  
        <div className={pageContainer}>
          <RegistrationForm />
        </div>
    </div>
  </>
);

export default RegistrationPage;
