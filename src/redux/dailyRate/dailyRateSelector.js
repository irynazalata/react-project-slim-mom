import {createSelector} from '@reduxjs/toolkit'

const getCalories = state => state.dailyRate.dailyRate;
const getProducts = state => state.dailyRate.notAllowedProducts;
const getFilter = state => state.dailyRate.filter;

const getFilteredProducts = createSelector(
    [getProducts, getFilter], (products, filter) => {
        return products.filter(product => product.toLowerCase().includes(filter.toLowerCase()))
    }
)

export default {getCalories, getProducts, getFilteredProducts}