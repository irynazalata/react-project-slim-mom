import axios from 'axios';
import productAddActions from './productAddActions.js';

axios.defaults.baseURL = 'http://slimmom-backend.herokuapp.com';

const addProduct = (date, productId, weight) => dispatch => {
  dispatch(productAddActions.addProductRequest())
  axios.post('/day', { date, productId, weight })
    .then(resp => dispatch(productAddActions.addProductSuccess(resp.data)))
    .catch(err => dispatch(productAddActions.addProductError(err)))
}

const fetchProducts = (date) => dispatch => {
  dispatch(productAddActions.fetchProductRequest())
  axios.post('/day/info', { date })
    .then(resp => dispatch(productAddActions.fetchProductSuccess(resp.eatenProducts)))
    .catch(err => dispatch(productAddActions.fetchProductError(err)))
}

export default {
  addProduct,
  fetchProducts
}