import { createAction } from '@reduxjs/toolkit';
;

const addProductRequest = createAction('Product/addRequest');
const addProductSuccess = createAction('Product/addSuccess');
const addProductError = createAction('Product/addError');

const fetchProductRequest = createAction('Product/fetchRequest');
const fetchProductSuccess = createAction('Product/fetchSuccess');
const fetchProductError = createAction('Product/fetchError');

export default {
  addProductRequest,
  addProductSuccess,
  addProductError,
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductError
}