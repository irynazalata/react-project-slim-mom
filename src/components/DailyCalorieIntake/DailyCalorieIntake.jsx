import { render } from "@testing-library/react"
import React from "react"
import { Link } from "react-router-dom";
import  {useSelector}  from "react-redux"
import styles from "./DailyCalorieIntake.module.css"
import dailyRateSelector from "../../redux/dailyRate/dailyRateSelector"


const DailyCalorieIntake = () => {
    const calories = useSelector(dailyRateSelector.getCalories);
    const products = useSelector(dailyRateSelector.getProducts);
console.log(products);

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>
        Ваша рекомендуемая суточная норма калорий составляет
      </p>
      <div className={styles.container}>
        <p className={styles.caloriesText}>
  <span className={styles.caloriesValue}>{calories}</span> ккал
        </p>
        <p className={styles.productsTitle}>
          Продукты, которые вам не рекомендуется употреблять
        </p>
        <ol className={styles.productsList}>
  {products.map((product, id) => <li key = {id} className={styles.productsItem}>{product}</li>)}
          
          
        </ol>
        <Link to= "/auth/register" className={styles.button, styles.buttonLink}>
          Начать худеть
        </Link>
      </div>
    </div>
  )
}

export default DailyCalorieIntake
