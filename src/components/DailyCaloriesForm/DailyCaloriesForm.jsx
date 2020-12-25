import React, { useState, Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./DailyCaloriesForm.module.css";
import dailyRateOperations from "../../redux/dailyRate/dailyRateOperations";
import { Formik, Form, Field } from "formik";
import authSelectors from "../../redux/auth/authSelectors";
import DailyCalorieIntake from "../DailyCalorieIntake";
import * as Yup from "yup";

const DailyCaloriesForm = ({ onShowModal }) => {
  const dispatch = useDispatch();
  const userData = useSelector(authSelectors.getUserData);
  const handleSubmit = (values) => {
    values.bloodType = Number(values.bloodType);
    dispatch(dailyRateOperations.onFetchDailyRates(values));
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.add("stopScroll");
    setTimeout(() => {
      onShowModal();
    }, 1000);
  };

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    height: Yup.number()
      .min(100, "Минимальное значение 100 см")
      .max(260, "Максимальное значение 260 см")
      .required("Обязательно"),
    age: Yup.number().min(12, "Минимум 12 лет").max(100, "Максимум 100 лет").required("Обязательно"),
    weight: Yup.number().min(40, "Минимальный вес 40 кг").max(200, "Максимальный вес 200 кг").required("Обязательно"),
    desiredWeight: Yup.number()

      .min(40, "Минимальный вес 40 кг")
      .max(150, "Максимальный вес 150 кг")
      .required("Обязательно")
      .when("weight", (weight, schema) => {
        return schema.test({
          test: (desiredWeight) => !!weight && desiredWeight < weight,
          message: "Желаемый вес должен быть меньше текущего",
        });
      }),
  });

  return (
    <>
      <Formik
        validationSchema={DisplayingErrorMessagesSchema}
        initialValues={{
          height: userData && userData.height ? userData.height : "",
          age: userData && userData.age ? userData.age : "",
          weight: userData && userData.weight ? userData.weight : "",
          desiredWeight: userData && userData.desiredWeight ? userData.desiredWeight : "",
          bloodType: userData && userData.bloodType ? userData.bloodType.toString() : "",
        }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          // resetForm({})
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <h2 className={styles.title}>Просчитай свою суточную норму калорий прямо сейчас</h2>
            <div className={styles.inputWrapper}>
              <div className={styles.inputBlock}>
                <label className={styles.label}>
                  <Field placeholder=" " className={styles.input} name="height" type="number" required />{" "}
                  <p className={styles.labelValue}>Рост*</p>
                  {touched.height && errors.height && <div className={styles.error}>{errors.height}</div>}
                </label>
                <label className={styles.label}>
                  {" "}
                  <Field placeholder=" " className={styles.input} name="age" type="number" required />
                  <p className={styles.labelValue}>Возраст*</p>
                  {touched.age && errors.age && <div className={styles.error}>{errors.age}</div>}
                </label>

                <label className={styles.label}>
                  <Field placeholder=" " className={styles.input} name="weight" type="number" required />
                  <p className={styles.labelValue}>Текущий вес*</p>
                  {touched.weight && errors.weight && <div className={styles.error}>{errors.weight}</div>}
                </label>
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>
                  <Field placeholder=" " className={styles.input} name="desiredWeight" type="number" required />
                  <p className={styles.labelValue}>Желаемый вес*</p>
                  {touched.desiredWeight && errors.desiredWeight && (
                    <div className={styles.error}>{errors.desiredWeight}</div>
                  )}
                </label>

                <p className={styles.radioTitle}>Группа крови*</p>
                <div className={styles.radioWrapper}>
                  <Field id="first" type="radio" name="bloodType" value="1" />
                  <label htmlFor="first" className={styles.radioLabel}>
                    1
                  </label>
                  <Field id="second" type="radio" name="bloodType" value="2" />
                  <label htmlFor="second" className={styles.radioLabel}>
                    2
                  </label>
                  <Field id="third" type="radio" name="bloodType" value="3" />
                  <label htmlFor="third" className={styles.radioLabel}>
                    3
                  </label>
                  <Field id="fourth" type="radio" name="bloodType" value="4" />
                  <label htmlFor="fourth" className={styles.radioLabel}>
                    4
                  </label>
                </div>
              </div>
            </div>
            <button className={styles.button} type="submit">
              Похудеть
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

// const mapDispatchToProps = {
//   onFetchDailyRates: dailyRateOperations.onFetchDailyRates,
// }

export default DailyCaloriesForm;
