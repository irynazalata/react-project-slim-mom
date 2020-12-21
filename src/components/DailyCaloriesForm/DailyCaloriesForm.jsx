import React, { Component } from "react"
import styles from "./DailyCaloriesForm.module.css"

class DailyCaloriesForm extends Component {
  handleChange = () => {}

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <>
       
        <form 
          className={styles.form}
          // onSubmit={this.handleSubmit}
        ><h2 className={styles.title}>Просчитай свою суточную норму калорий</h2>
          <div className={styles.inputWrapper}>
            <div className={styles.inputBlock}>
              <label className={styles.label}>
                Рост *
                <input
                  className={styles.input}
                  name="height"
                  type="number"
                  value="{height}"
                  //   onChange={this.handleChange}
                  required
                />
              </label>
              <label className={styles.label}>
                {" "}
                Возраст *
                <input
                  className={styles.input}
                  name="age"
                  type="number"
                  value="{age}"
                  //   onChange={this.handleChange}
                  required
                />
              </label>

              <label className={styles.label}>
                Текущий вес *
                <input
                  className={styles.input}
                  name="currentWeight"
                  type="number"
                  value="{currentWeight}"
                  //   onChange={this.handleChange}
                  required
                />
              </label>
            </div>
            <div className={styles.inputBlock}>
              <label className={styles.label}>
                Желаемый вес *
                <input
                  className={styles.input}
                  name="targetWeight"
                  type="number"
                  value="{targetWeight}"
                  //   onChange={this.handleChange}
                  required
                />
              </label>

              <p className={styles.label}>Группа крови *</p>
              <div className={styles.radioWrapper}>
                <label className={styles.radioLabel}>
                  {" "}
                  <input type="radio" id="choice1" name="bloodType" value="1" />
                  1
                </label>

                <label className={styles.radioLabel}>
                  <input type="radio" id="choice2" name="bloodType" value="2" />
                  2
                </label>

                <label className={styles.radioLabel}>
                  <input type="radio" id="choice3" name="bloodType" value="3" />
                  3
                </label>

                <label className={styles.radioLabel}>
                  <input type="radio" id="choice4" name="bloodType" value="4" />
                  4
                </label>
              </div>
            </div>
          </div>
          <button className={styles.button} type="submit">
            Похудеть
          </button>
        </form>
      </>
    )
  }
}

export default DailyCaloriesForm
