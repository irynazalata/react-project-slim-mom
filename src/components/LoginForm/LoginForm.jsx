import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import styles from "./LoginForm.module.css";

const LoginForm = ({
  inputLogin,
  handleChangeLogin,
  inputPassword,
  handleChangePassword,
}) => {
  return (
    <>
      <h1 className={styles.title}>Вход</h1>
      <Formik>
        <Form className={styles.form}>
          <label className={styles.label}>
            <Field
              type="text"
              name="login"
              placeholder=" "
              value={inputLogin}
              onChange={handleChangeLogin}
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
            Вход
          </button>
        </Form>
      </Formik>
      <Link to="/" className={styles.buttonEnter}>
        Регистрация
      </Link>
    </>
  );
};

LoginForm.propTypes = {
  inputLogin: PropTypes.string.isRequired,
  handleChangeLogin: PropTypes.func.isRequired,
  inputPassword: PropTypes.string.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
};

export default LoginForm;
