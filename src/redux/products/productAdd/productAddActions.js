import { createAction } from '@reduxjs/toolkit';
const addProductRequest = createAction('Product/addRequest');
const addProductSuccess = createAction('Product/addSuccess');
const addProductError = createAction('Product/addError');

const fetchProductRequest = createAction('Product/fetchRequest');
const fetchProductSuccess = createAction('Product/fetchSuccess');
const fetchProductError = createAction('Product/fetchError');

// const searchProductRequest = createAction('Product/searchRequest');
// const searchProductSuccess = createAction('Product/searchSuccess');
// const searchProductError = createAction('Product/searchError');

const deleteProductRequest = createAction('DELETE_PRODUCT_REQUEST');
const deleteProductSuccess = createAction('DELETE_PRODUCT_SUCCESS');
const deleteProductError = createAction('DELETE_PRODUCT_ERROR');
export default {
  addProductRequest,
  addProductSuccess,
  addProductError,
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductError,
  // searchProductRequest,
  // searchProductSuccess,
  // searchProductError
};
