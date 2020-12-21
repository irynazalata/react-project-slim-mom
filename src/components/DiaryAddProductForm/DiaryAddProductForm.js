import React, { Component } from 'react';

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
    </form>
  }
}

export default DiaryAddProductForm;