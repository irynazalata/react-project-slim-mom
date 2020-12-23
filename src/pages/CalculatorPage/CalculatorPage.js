import React from "react"
import CalculatorCalorieForm from "../../components/CalculatorCalorieForm/CalculatorCalorieForm.jsx"
import RightSideBar from "../../components/RightSideBar/RightSideBar.js"


import styles from "../DiaryPage/diary.module.css"

const CalculatorPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.CalculatorCalorieFormBox}>
        <CalculatorCalorieForm />
      </div>
     <RightSideBar/>
    </div>
  )
}

export default CalculatorPage