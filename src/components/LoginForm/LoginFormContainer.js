import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "./LoginForm";
import authOperations from "../../redux/auth/authOperations";

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  const handleSubmit = (value) => {
    dispatch(authOperations.login(value));
  };

  return <LoginForm onSubmit={handleSubmit} />;
}
