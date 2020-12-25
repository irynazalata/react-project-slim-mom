import React from 'react';
import { connect } from 'react-redux';
import productAddSelectors from '../../redux/products/productAdd/productAddSelectors';
import PropTypes from 'prop-types';
import DiaryProductsListItem from './DiaryProductsListItem/DiaryProductsListItem';
import styles from './DiaryProductsList.module.css';

const DiaryProductsList = ({ products }) => {
  return (
    <>
      {!products && (
        <h4 className={styles.title}>
          Съеденные в этот день продукты ещё не добавлены
        </h4>
      )}
      <ul className={styles.list}>
        {products &&
          products.map(({ id, ...props }) => (
            <DiaryProductsListItem id={id} {...props} />
          ))}
      </ul>
    </>
  );
};

DiaryProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  products: productAddSelectors.getProducts(state),
});

export default connect(mapStateToProps)(DiaryProductsList);
// export default DiaryProductsList;
