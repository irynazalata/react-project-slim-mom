import axios from 'axios';
import productAddActions from './productAddActions.js';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const addProduct = (date, productId, weight) => dispatch => {
  dispatch(productAddActions.addProductRequest());
  axios
    .post('/day', { date, productId, weight })
    .then(resp =>
      dispatch(
        productAddActions.addProductSuccess(resp.data.day || resp.data.newDay),
      ),
    )
    .catch(err => dispatch(productAddActions.addProductError(err)));
};

const fetchProducts = date => dispatch => {
  dispatch(productAddActions.fetchProductRequest());
  axios
    .post('/day/info', { date })
    .then(resp => dispatch(productAddActions.fetchProductSuccess(resp.data)))
    .catch(err => dispatch(productAddActions.fetchProductError(err)));
};

const deleteProduct = (dayId, eatenProductId) => dispatch => {
  dispatch(productAddActions.deleteProductRequest());
  axios
    .delete('/day', { data: { dayId, eatenProductId } })
    .then(resp => {
      dispatch(productAddActions.deleteProductSuccess(resp.data));
    })
    .catch(error => {
      dispatch(productAddActions.deleteProductError(error));
    });
};
// const searchProducts = (query) => dispatch => {
//   dispatch(productAddActions.searchProductRequest())
//   axios.get(`/product?search=${query}`)
//     .then(resp => dispatch(productAddActions.searchProductSuccess(resp)))
//   .cath(err => dispatch(productAddActions.searchProductError(err)))
// }
export default {
  addProduct,
  fetchProducts,
  deleteProduct,
  // searchProducts
};
