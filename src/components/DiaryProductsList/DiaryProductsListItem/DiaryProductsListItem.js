import React from 'react';
import styles from './DiaryProductsListItem.module.css';

const DiaryProductsListItem = ({ title, weight, kcal }) => {
  const calories = Math.round(kcal);
  return (
    <li className={styles.listItem}>
      <p className={styles.listItemName}>{title}</p>
      <p className={styles.listItemWeight}>{weight} г</p>
      <p className={styles.listItemCalorie}>
        {calories} <span>ккал</span>
      </p>
      <button type="button" className={styles.button}>
        X
      </button>
    </li>
  );
};

export default DiaryProductsListItem;

// onClick = { deleteProduct };
