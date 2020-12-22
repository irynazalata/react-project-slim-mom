import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = ({ handleSubmit }) => {
  return (
    <>
      <h1 className={styles.title}>Регистрация</h1>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm({});
        }}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            <Field type="text" name="username" placeholder=" " className={styles.input} />
            <p className={styles.name}>Имя *</p>
          </label>
          <label className={styles.label}>
            <Field type="text" name="email" placeholder=" " className={styles.input} />
            <p className={styles.name}>Логин *</p>
          </label>
          <label className={styles.label}>
            <Field type="password" name="password" placeholder=" " className={styles.inputPass} />
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
  handleSubmit: PropTypes.func.isRequired,
};

export default RegistrationForm;
