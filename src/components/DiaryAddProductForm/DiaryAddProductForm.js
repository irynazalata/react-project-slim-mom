import React, { Component } from 'react';
import img from '../../images/plus.png';
import { connect } from 'react-redux';
import axios from 'axios';
import productAddOperations from '../../redux/products/productAdd/productAddOperations';
import AxiosList from './AxiosList';

import style from './DiaryAddProductForm.module.css';

class DiaryAddProductForm extends Component {
  state = {
    product: '',
    weight: '',
    productsQuery: [],
    productId: "",
    error: "",
  };

  componentDidMount() {
    this.props.toFetchProducts(this.props.date);
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.toAddProducts(this.props.date, this.state.productId, this.state.weight);
    this.setState({ product: "" });
  };
  
  searchProducts = (query) => {
    axios
      .get(`/product?search=${query}`)
      .then(resp =>
        this.setState({
          productsQuery: resp.data.length > 1 ? [...resp.data] : [],
        }),
      )
      .catch((err) => {
        if (err.response.status == 401 || err.response.status == 403 || err.response.status == 404) {
         alert ("Ошибка при аутентификации!")
        }
        if (err.response.status == 400 ) {
         alert ("Такого продукта не существует! Попробуйте скорректировать ввод")
        }
      } 
      )};

  getCurrentProduct = (e) => {
    
    this.setState({
      product: e.target.textContent,
      productId: e.target.dataset.id,
      productsQuery: [],
      weight: 100
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
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <input
          className={style.input}
          name="product"
          value={this.state.product}
          placeholder="Введите название продукта"
          type="text"
          autoComplete="off"
          onChange={this.handleChange}
        />
        <input
          className={style.input}
          name="weight"
          value={this.state.product ? this.state.weight : ""}
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

const mapStateToProps = (state) => ({
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
