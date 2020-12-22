import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import authOperations from "../../redux/auth/authOperations";
import authSelectors from "../../redux/auth/authSelectors";

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const getToken = useSelector(authSelectors.getToken);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch, getToken]);

  const handleSubmit = (value) => {
    dispatch(authOperations.login(value));
  };

  return <LoginForm onSubmit={handleSubmit} />;
}
