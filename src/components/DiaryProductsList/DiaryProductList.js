import React from "react";
import { connect } from "react-redux";
import productAddSelectors from "../../redux/products/productAdd/productAddSelectors";
import productAddOperations from "../../redux/products/productAdd/productAddOperations";
import DiaryProductsListItem from "./DiaryProductsListItem/DiaryProductsListItem";
import styles from "./DiaryProductsList.module.css";
import { Component } from "react";

class DiaryProductsList extends Component {
  componentDidMount() {
    this.props.toFetchProducts(this.props.date);
  }

  componentDidUpdate(prevProps, PrevState) {
    const countPrev = prevProps.products ? prevProps.products.length : 0;
    const countNow = this.props.products ? this.props.products.length : 0;

    if (countPrev !== countNow) {
      this.props.toFetchProducts(this.props.date);
    }
  }
  render() {
    return (
      <>
        {!this.props.products || !(this.props.products.length > 0) ? (
          <h4 className={styles.title}>Съеденные в этот день продукты ещё не добавлены</h4>
        ) : (
          ""
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

const mapStateToProps = (state) => ({
  products: productAddSelectors.getProducts(state),
  date: state.date,
});
const mapDispatchToProps = (dispatch) => {
  return {
    toFetchProducts: (date) => dispatch(productAddOperations.fetchProducts(date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiaryProductsList);
