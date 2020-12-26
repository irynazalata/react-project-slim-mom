import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit"
import dailyRateActions from "./dailyRateActions"

// const setCalories = (_, { payload }) => payload.dailyRate;
// const setNotAllowedProducts = (_, { payload }) => payload.notAllowedProducts;

// const calories = createReducer(
//   "",
//   {
//     [dailyRateActions.fetchDailyRateSuccess]: setCalories,
//   }
// );

// const notAllowedProducts = createReducer([], {
//     [dailyRateActions.fetchDailyRateSuccess]: setNotAllowedProducts,
// });

// export default combineReducers({
//     calories,
//     notAllowedProducts,
// });

const initialState = {
  id: "",
  dailyRate: "",
  summaries: [
    {
      _id: "",
      date: "",
      kcalLeft: "",
      kcalConsumed: "",
      dailyRate: "",
      percentsOfDailyRate: "",
      userId: "",
      __v: "",
    },
  ],
  notAllowedProducts: [],
}

const setDiet = (_, { payload }) => payload
const userDataDiet = createReducer(initialState, {
  [dailyRateActions.fetchDailyRateSuccess]: setDiet,
})

const setFilter = (_, { payload }) => payload
const filter = createReducer("", {
  [dailyRateActions.changeFilter]: setFilter,
})

export default {userDataDiet, filter}
