import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = ({
  inputName,
  handleChangeName,
  inputEmail,
  handleChangeEmail,
  inputPassword,
  handleChangePassword,
}) => {
  return (
    <>
      <h1 className={styles.title}>Регистрация</h1>
      <Formik>
        <Form className={styles.form}>
          <label className={styles.label}>
            <Field
              type="text"
              name="name"
              value={inputName}
              onChange={handleChangeName}
              placeholder=" "
              className={styles.input}
            />
            <p className={styles.name}>Имя *</p>
          </label>
          <label className={styles.label}>
            <Field
              type="text"
              name="login"
              placeholder=" "
              value={inputEmail}
              onChange={handleChangeEmail}
              className={styles.input}
            />
            <p className={styles.name}>Логин *</p>
          </label>
          <label className={styles.label}>
            <Field
              type="password"
              name="password"
              placeholder=" "
              value={inputPassword}
              onChange={handleChangePassword}
              className={styles.inputPass}
            />
            <p className={styles.name}>Пароль *</p>
          </label>
          <button type="submit" className={styles.buttonReg}>
            Регистрация
          </button>
        </Form>
      </Formik>
      <Link to="/" className={styles.buttonEnter}>
        Вход
      </Link>
    </>
  );
};

RegistrationForm.propTypes = {
  inputName: PropTypes.string.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  inputEmail: PropTypes.string.isRequired,
  handleChangeEmail: PropTypes.func.isRequired,
  inputPassword: PropTypes.string.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
};

export default RegistrationForm;
