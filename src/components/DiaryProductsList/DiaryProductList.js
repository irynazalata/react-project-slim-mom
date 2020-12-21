import React from 'react';
import styles from './DiaryProductsList.module.css';

const DiaryProductsList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <p className={styles.listItemName}>Баклажан</p>
        <p className={styles.listItemWeight}>100 г</p>
        <p className={styles.listItemCalorie}>
          320 <span>ккал</span>
        </p>
        <button type="button" className={styles.button}>
          X
        </button>
      </li>
      <li className={styles.listItem}>
        <p className={styles.listItemName}>Птиця</p>
        <p className={styles.listItemWeight}>100 г</p>
        <p className={styles.listItemCalorie}>
          320 <span>ккал</span>
        </p>
        <button type="button" className={styles.button}>
          X
        </button>
      </li>
      <li className={styles.listItem}>
        <p className={styles.listItemName}>Хліб</p>
        <p className={styles.listItemWeight}>100 г</p>
        <p className={styles.listItemCalorie}>
          320 <span>ккал</span>
        </p>
        <button type="button" className={styles.button}>
          X
        </button>
      </li>
      <li className={styles.listItem}>
        <p className={styles.listItemName}>Горіх</p>
        <p className={styles.listItemWeight}>100 г</p>
        <p className={styles.listItemCalorie}>
          320 <span>ккал</span>
        </p>
        <button type="button" className={styles.button}>
          X
        </button>
      </li>
      <li className={styles.listItem}>
        <p className={styles.listItemName}>Свинина</p>
        <p className={styles.listItemWeight}>100 г</p>
        <p className={styles.listItemCalorie}>
          320 <span>ккал</span>
        </p>
        <button type="button" className={styles.button}>
          X
        </button>
      </li>
      <li className={styles.listItem}>
        <p className={styles.listItemName}>Свинина</p>
        <p className={styles.listItemWeight}>100 г</p>
        <p className={styles.listItemCalorie}>
          320 <span>ккал</span>
        </p>
        <button type="button" className={styles.button}>
          X
        </button>
      </li>
      <li className={styles.listItem}>
        <p className={styles.listItemName}>Свинина</p>
        <p className={styles.listItemWeight}>100 г</p>
        <p className={styles.listItemCalorie}>
          320 <span>ккал</span>
        </p>
        <button type="button" className={styles.button}>
          X
        </button>
      </li>
    </ul>
  );
};

export default DiaryProductsList;
