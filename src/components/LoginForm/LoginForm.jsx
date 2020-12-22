import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import styles from "./LoginForm.module.css";

const LoginForm = ({ onSubmit }) => {
  return (
    <>
      <h1 className={styles.title}>Вход</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm({});
        }}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            <Field type="text" name="email" placeholder=" " className={styles.input} />
            <p className={styles.name}>Логин *</p>
          </label>
          <label className={styles.label}>
            <Field type="password" name="password" placeholder=" " className={styles.inputPass} />
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
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
