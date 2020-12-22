import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./authActions";

const createUser = (_, { payload }) => payload;

const user = createReducer(
  {},
  {
    [authActions.registerSuccess]: createUser,
  }
);


export default combineReducers({
  user,
});
