import React, { Component } from 'react';
import img from '../../images/plus.png';
import { connect } from 'react-redux';
import axios from 'axios';
import productAddOperations from '../../redux/products/productAdd/productAddOperations';
import AxiosList from './axiosList';

import style from './DiaryAddProductForm.module.css';

class DiaryAddProductForm extends Component {
  state = {
    product: '',
    weight: '',
    productsQuery: [],
    productId: '',
  };

  componentDidMount() {
    // console.log("this.props", this.props);
    this.props.toFetchProducts(this.props.date);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('hello');
    console.log('prevProps.date', prevProps);
    //   if (prevProps.date !== this.props.date) {
    //   this.props.toFetchProducts(this.props.date)
    // }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      weight: 100,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('this.props.date', this.props.date);
    this.props.toAddProducts(
      this.props.date,
      this.state.productId,
      this.state.weight,
    );
    this.setState({ product: '' });
  };

  searchProducts = query => {
    console.log(query);
    axios
      .get(`/product?search=${query}`)
      .then(resp =>
        this.setState({
          productsQuery: resp.data.length > 1 ? [...resp.data] : [],
        }),
      )
      .catch(err => console.log(err));
  };

  getCurrentProduct = e => {
    console.log(e.target.textContent);
    console.log(e.target.dataset.id);
    this.setState({
      product: e.target.textContent,
      productId: e.target.dataset.id,
      productsQuery: [],
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.product !== this.state.product) {
      if (this.state.product.length < 3) {
        this.setState({ productsQuery: [], weight: '' });
        return;
      }
      this.searchProducts(this.state.product);
    }
  };

  render() {
    console.log(this.state.productsQuery);
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <input
          className={style.input}
          name="product"
          value={this.state.product}
          placeholder="Введите название продукта"
          type="text"
          onChange={this.handleChange}
        />
        <input
          className={style.input}
          name="weight"
          value={this.state.weight}
          placeholder="Граммы"
          type="number"
          onChange={this.handleChange}
        />
        <button className={style.btn} type="submit">
          Добавить
        </button>
        <button className={style.roundBtn} type="submit">
          <img className={style.img} src={img} alt="add" />
        </button>
        {this.state.productsQuery && (
          <AxiosList
            toGetProduct={this.getCurrentProduct}
            arr={this.state.productsQuery}
          />
        )}
      </form>
    );
  }
}

const mapStateToProps = state => ({
  // products: state.products.items,
  date: state.date,
});

const mapDispatchToProps = dispatch => {
  return {
    toAddProducts: (date, productId, weight) =>
      dispatch(productAddOperations.addProduct(date, productId, weight)),
    toFetchProducts: date => dispatch(productAddOperations.fetchProducts(date)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiaryAddProductForm);
