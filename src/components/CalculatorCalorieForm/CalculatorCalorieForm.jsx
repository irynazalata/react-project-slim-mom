import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styles from "./CalculatorCalorieForm.module.css"
import dailyRateOperations from "../../redux/dailyRate/dailyRateOperations"
import { Formik, Form, Field } from "formik"
import authSelectors from "../../redux/auth/authSelectors"
import * as Yup from "yup";

function CalculatorCalorieForm() {
  const dispatch = useDispatch()
  const userId = useSelector(authSelectors.getUserId)
  const handleSubmit = (values) => {
    values.bloodType = Number(values.bloodType)
    dispatch(dailyRateOperations.onFetchDailyRatesAuthorised(values, userId))
  }
  const DisplayingErrorMessagesSchema = Yup.object().shape({
    height: Yup.number().min(100, "At least 100 cm!").max(260, "Max height is 260 cm!").required("Required"),
    age: Yup.number().min(12, "Too young for a diet!").max(100, "Diet after 100?").required("Required"),
    weight: Yup.number().min(40, "You should be at least 40 kg!").max(330, "Max weight is 330!").required("Required"),
    desiredWeight: Yup.number().min(40, "Enter at least 40 kg").max(250, "Wow! Are you sure?").required("Required"),

  });

  return (
    <>
      <Formik
      validationSchema={DisplayingErrorMessagesSchema}
        initialValues={{
          height: "",
          age: "",
          weight: "",
          desiredWeight: "",
          bloodType: "",
        }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values)
          resetForm({});
        }}
      >
          {({ errors, touched }) => ( 
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
                {touched.height && errors.height && <div className={styles.error}>{errors.height}</div>} 
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
                {touched.age && errors.age && <div className={styles.error}>{errors.age}</div>} 
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
                {touched.weight && errors.weight && <div className={styles.error}>{errors.weight}</div>} 
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
                {touched.desiredWeight && errors.desiredWeight && <div className={styles.error}>{errors.desiredWeight}</div>} 
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
          )}
      </Formik>
    </>
  )
}

// const mapDispatchToProps = {
//   onFetchDailyRates: dailyRateOperations.onFetchDailyRatesAuthorised,
// }

export default CalculatorCalorieForm
