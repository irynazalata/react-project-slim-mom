import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import productAddActions from './productAddActions.js';

const toAddProduct = (state, action) => {
  return action.payload;
};

const toDeleteProduct = (state, action) => {
  return action.payload;
};

const products = createReducer(
  {},
  {
    [productAddActions.fetchProductSuccess]: (state, action) => action.payload,
    [productAddActions.addProductSuccess]: toAddProduct,
    [productAddActions.deleteProductSuccess]: toDeleteProduct,
  },
);

export default products;
