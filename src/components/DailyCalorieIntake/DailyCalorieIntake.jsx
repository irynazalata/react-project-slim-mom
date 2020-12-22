import { render } from "@testing-library/react"
import React from "react"
import styles from "./DailyCalorieIntake.module.css"

const DailyCalorieIntake = () => {


        return(
            <div className={styles.wrapper}>
            <p className = {styles.title}>Ваша рекомендуемая суточная норма калорий составляет</p>
            <div className = {styles.container}>
<p className = {styles.caloriesText}><span className = {styles.caloriesValue}>2800</span> ккал</p>
<p className = {styles.productsTitle}>Продукты, которые вам не рекомендуется употреблять</p>
<ol className = {styles.productsList}>
    <li className = {styles.productsItem}>Молоко</li>
    <li>Мясо</li>
</ol>
<button className={styles.button} type="submit">
            Похудеть
          </button>
            </div>
            </div>
        )
    }

export default DailyCalorieIntake