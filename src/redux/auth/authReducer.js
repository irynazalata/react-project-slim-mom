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
    [authActions.logoutSuccess]: () => ({}),
    [authActions.unsetUserName]: () => ({}),
  }
);

const token = createReducer("", {
  [authActions.loginSuccess]: addToken,
  [authActions.logoutSuccess]: () => "",
  [authActions.tokenUnset]: () => "",
});

export default combineReducers({
  user,
  token,
});
