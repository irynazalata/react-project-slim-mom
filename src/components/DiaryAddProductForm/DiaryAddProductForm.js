import React, { Component } from 'react';
import img from "../../images/plus.png";
import { connect } from 'react-redux';
import productAddOperations from '../../redux/products/productAdd/productAddOperations'

import style from './DiaryAddProductForm.module.css'


class DiaryAddProductForm extends Component {

  state = {
    product: '',
    weight: ''
}

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
   e.preventDefault();
  }

  render() {
  return <form className={style.form} onSubmit={this.handleSubmit}>
      <input className={style.input} name="product" value={this.state.product} placeholder="Введите название продукта" type="text" onChange={this.handleChange} />
      <input className={style.input} name="weight" value={this.state.weight} placeholder="Граммы" type="number" onChange={this.handleChange}/>
    <button className={style.btn} type='submit'>Добавить</button>
    <button className={style.roundBtn} type='submit'>
      <img className={style.img} src={img} alt='add'/>
    </button>
    </form>
  }
}

const mapStateToProps = (state) => ({
products: state.products.items
})

const mapDispatchToProps = dispatch => {
 
  return {
    toAddProdacts: (product, weight) => dispatch(productAddOperations.addProduct(product, weight)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (DiaryAddProductForm);