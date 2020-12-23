import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styles from "./CalculatorCalorieForm.module.css"
import dailyRateOperations from "../../redux/dailyRate/dailyRateOperations"
import { Formik, Form, Field } from "formik"
import authSelectors from "../../redux/auth/authSelectors"


function CalculatorCalorieForm() {
  const dispatch = useDispatch()
  const userId = useSelector(authSelectors.getUserId)
  const handleSubmit = (values) => {
    values.bloodType = Number(values.bloodType)
    dispatch(dailyRateOperations.onFetchDailyRatesAuthorised(values, userId))
  }

  return (
    <>
      <Formik
        initialValues={{
          height: "",
          age: "",
          weight: "",
          desiredWeight: "",
          bloodType: "",
        }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values)
          // resetForm({});
        }}
      >
        <Form className={styles.form}>
          <h2 className={styles.title}>Узнай свою суточную норму калорий</h2>
          <div className={styles.inputWrapper}>
            <div className={styles.inputBlock}>
              <label className={styles.label}>
                <Field
                  placeholder=" "
                  className={styles.input}
                  name="height"
                  type="number"
                  required
                />{" "}
                <p className={styles.labelValue}>Рост*</p>
              </label>
              <label className={styles.label}>
                {" "}
                <Field
                  placeholder=" "
                  className={styles.input}
                  name="age"
                  type="number"
                  required
                />
                <p className={styles.labelValue}>Возраст*</p>
              </label>

              <label className={styles.label}>
                <Field
                  placeholder=" "
                  className={styles.input}
                  name="weight"
                  type="number"
                  required
                />
                <p className={styles.labelValue}>Текущий вес*</p>
              </label>
            </div>
            <div className={styles.inputBlock}>
              <label className={styles.label}>
                <Field
                  placeholder=" "
                  className={styles.input}
                  name="desiredWeight"
                  type="number"
                  required
                />
                <p className={styles.labelValue}>Желаемый вес*</p>
              </label>
              <p className={styles.radioTitle}>Группа крови*</p>
              <div className={styles.radioWrapper}>
                <Field id="first" type="radio" name="bloodType" value="1" />
                <label for="first" className={styles.radioLabel}>
                  1
                </label>
                <Field id="second" type="radio" name="bloodType" value="2" />
                <label for="second" className={styles.radioLabel}>
                  2
                </label>
                <Field id="third" type="radio" name="bloodType" value="3" />
                <label for="third" className={styles.radioLabel}>
                  3
                </label>
                <Field id="fourth" type="radio" name="bloodType" value="4" />
                <label for="fourth" className={styles.radioLabel}>
                  4
                </label>
              </div>
            </div>
          </div>
          <button className={styles.button} type="submit">
            Похудеть
          </button>
        </Form>
      </Formik>
    </>
  )
}

// const mapDispatchToProps = {
//   onFetchDailyRates: dailyRateOperations.onFetchDailyRatesAuthorised,
// }

export default CalculatorCalorieForm