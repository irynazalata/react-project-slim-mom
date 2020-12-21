import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DiaryProductsListItem from './DiaryProductsListItem/DiaryProductsListItem';
import styles from './DiaryProductsList.module.css';

const DiaryProductsList = ({ products }) => {
  return (
    <ul className={styles.list}>
      {/* {products.map(({ id }) => (
        <DiaryProductsListItem id={id} />
      ))} */}
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
// DiaryProductsList.propTypes = {
//   products: PropTypes.array.isRequired,
// };

// const mapStateToProps = state => ({
//   products: productsSelectors.getProductsByDate(state),
// });
// export default connect(mapStateToProps)(DiaryProductsList);
export default DiaryProductsList;
