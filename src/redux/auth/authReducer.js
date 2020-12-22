import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./authActions";

const createUser = (_, { payload }) => payload;
const loginUser = (_, { payload }) => payload.user;
const addToken = (_, { payload }) => payload.accessToken;
const getUser = (_, { payload }) => payload;

const user = createReducer(
  {},
  {
    [authActions.registerSuccess]: createUser,
    [authActions.loginSuccess]: loginUser,
    [authActions.getCurrentUserSuccess]: getUser,
  }
);

const token = createReducer("", {
  [authActions.loginSuccess]: addToken,
});

export default combineReducers({
  user,
  token,
});
