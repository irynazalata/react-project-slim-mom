import React from 'react';
import { connect } from 'react-redux';
import productSelectors from '../../redux/products/productSelectors';
import productOperations from '../../redux/products/productOperations';
import DiaryProductsListItem from './DiaryProductsListItem/DiaryProductsListItem';
import styles from './DiaryProductsList.module.css';
import { Component } from 'react';

class DiaryProductsList extends Component {
  render() {
    return (
      <>
        {!this.props.products || !(this.props.products.length > 0) ? (
          <h4 className={styles.title}>
            Съеденные в этот день продукты ещё не добавлены
          </h4>
        ) : (
          ''
        )}
        {this.props.products && (
          <ul className={styles.list}>
            {this.props.products.map(({ id, ...props }) => (
              <DiaryProductsListItem key={id} id={id} {...props} />
            ))}
          </ul>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  products: productSelectors.getProducts(state),
  date: state.date,
});
const mapDispatchToProps = dispatch => {
  return {
    toFetchProducts: date => dispatch(productOperations.fetchProducts(date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiaryProductsList);
