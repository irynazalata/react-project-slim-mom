import React from "react";
import Header from "../components/Header/Header";
import Logo from "../components/Logo/Logo";
import LoginForm from "../components/LoginForm/LoginFormContainer";
import Notification from "../shared/Notification/Notification";
import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/authSelectors";
import getError from "../redux/error/errorSelectors";
import Loader from "../shared/Loader/Loader";
import getLoader from "../redux/loader/loaderSelectors";
import { pageContainer, bgContainer, headerHide, logoHide } from "./LoginRegistrationPage.module.css";

const LoginPage = () => {
  const isError = useSelector(getError);
  const loader = useSelector(getLoader);
  console.log(loader);
  return (
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
          {loader && <Loader />}
        </div>
      </div>
      <Notification>
        {isError ? <p>Логин или пароль введен неверно</p> : <p>Регистрация прошла успешно</p>}
      </Notification>
    </>
  );
};

export default LoginPage;
