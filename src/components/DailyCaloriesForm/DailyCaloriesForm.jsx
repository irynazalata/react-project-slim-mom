import React, { useState, Component } from "react"
import { connect } from "react-redux"
import styles from "./DailyCaloriesForm.module.css"
import dailyRateOperations from "../../redux/dailyRate/dailyRateOperations"

class DailyCaloriesForm extends Component {
  state = {
    height: "",
    age: "",
    weight: "",
    desiredWeight: "",
    bloodType: ""
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //this.props.onFetchDailyRates()
    
    this.props.showModal()
  }

  render() {
    return (
      <>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <h2 className={styles.title}>
            Просчитай свою суточную норму калорий
          </h2>
          <div className={styles.inputWrapper}>
            <div className={styles.inputBlock}>
              <label className={styles.label}>
                <input
                  placeholder=" "
                  className={styles.input}
                  name="height"
                  type="number"
                  value={this.state.height}
                  onChange={this.handleChange}
                  required
                />{" "}
                <p className={styles.labelValue}>Рост*</p>
              </label>
              <label className={styles.label}>
                {" "}
                <input
                  placeholder=" "
                  className={styles.input}
                  name="age"
                  type="number"
                  value={this.state.age}
                  onChange={this.handleChange}
                  required
                />
                <p className={styles.labelValue}>Возраст*</p>
              </label>

              <label className={styles.label}>
                <input
                  placeholder=" "
                  className={styles.input}
                  name="weight"
                  type="number"
                  value={this.state.currentWeight}
                  onChange={this.handleChange}
                  required
                />
                <p className={styles.labelValue}>Текущий вес*</p>
              </label>
            </div>
            <div className={styles.inputBlock}>
              <label className={styles.label}>
                <input
                  placeholder=" "
                  className={styles.input}
                  name="desiredWeight"
                  type="number"
                  value={this.state.targetWeight}
                  onChange={this.handleChange}
                  required
                />
                <p className={styles.labelValue}>Желаемый вес*</p>
              </label>
              <p className={styles.radioTitle}>Группа крови*</p>
              <div className={styles.radioWrapper}>
                <input id="first" type="radio" name="bloodType" value="1" />
                <label for="first" className={styles.radioLabel}>
                  1
                </label>
                <input id="second" type="radio" name="bloodType" value="2" />
                <label for="second" className={styles.radioLabel}>
                  2
                </label>
                <input id="third" type="radio" name="bloodType" value="3" />
                <label for="third" className={styles.radioLabel}>
                  3
                </label>
                <input id="fourth" type="radio" name="bloodType" value="4" />
                <label for="fourth" className={styles.radioLabel}>
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

const mapDispatchToProps = {
  onFetchDailyRates: dailyRateOperations.onFetchDailyRates,
}

export default connect(null, mapDispatchToProps)(DailyCaloriesForm)
