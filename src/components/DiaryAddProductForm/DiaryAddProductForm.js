import React from 'react';
import { Component } from 'react';

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
    return <form onSubmit={this.handleSubmit}>
      <input name="product" value={this.state.product} placeholder="Введите название продукта" type="text" onChange={this.handleChange} />
      <input name="weight" value={this.state.weight} placeholder="Граммы" type="number" />
      <button type='submit' onChange={this.handleChange}>Добавить</button>
    </form>
  }
}

export default DiaryAddProductForm;