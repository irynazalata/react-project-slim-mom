import React from "react"
import CalculatorCalorieForm from "../../components/CalculatorCalorieForm/CalculatorCalorieForm.js"

import "./Calculator.module.css"

const CalculatorPage = () => {
  return (
    <div className='container'>
      <div className='CalculatorCalorieFormBox'>
        <CalculatorCalorieForm />
      </div>
      <div className="SideBarBox">
      </div>
    </div>
  )
}

export default CalculatorPage