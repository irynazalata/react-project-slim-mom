import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import authSelectors from "../redux/auth/authSelectors";
import Header from "../components/Header/Header";
import RegistrationForm from "../components/RegistrationForm/RegistrationFormContainer";
import { pageContainer, bgContainer } from "./LoginRegistrationPage.module.css";
import authActions from "../redux/auth/authActions";

const RegistrationPage = () => {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(name);
  useEffect(() => {
    if (name) {
      dispatch(authActions.unsetUserName());
      history.push("/auth/login");
    }
  }, [name, history]);
  return (
    <>
      <div className={bgContainer}>
        <Header />
        <div className={pageContainer}>
          <RegistrationForm />
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
