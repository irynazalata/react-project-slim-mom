import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import productAddActions from './productAddActions.js';

const toAddProduct = (state, action) => {
  return [...state, action.payload]
}

const items = createReducer([], {
  [productAddActions.fetchProductSuccess]: (state, action) => action.payload,
  [productAddActions.addProductSuccess]: toAddProduct,
})



export default combineReducers ({items})