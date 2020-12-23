import React from 'react';
import Header from '../components/Header/Header';
import RegistrationForm from '../components/RegistrationForm/RegistrationFormContainer';
import { pageContainer } from './LoginRegistrationPage.module.css';


const RegistrationPage = () => (
  <>
    <div className={pageContainer}>
      <Header />
      <RegistrationForm />
    </div>
  </>
);

export default RegistrationPage;
