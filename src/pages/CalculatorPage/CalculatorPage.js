import React from "react";
import CalculatorCalorieForm from "../../components/DailyCaloriesForm/DailyCaloriesForm";
import Header from "../../components/Header/Header";
import "./calculator.module.css";

const CalculatorPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="CalculatorCalorieFormBox">
          <CalculatorCalorieForm />
        </div>
        <div className="SideBarBox"></div>
      </div>
    </>
  );
};

export default CalculatorPage;
