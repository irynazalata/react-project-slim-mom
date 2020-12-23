import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "./LoginForm";
import authOperations from "../../redux/auth/authOperations";
import * as Yup from "yup";

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    // username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    password: Yup.string().min(8, "Too Short!").max(50, "Too Long!").required("Required"),
  });

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  const handleSubmit = (value) => {
    dispatch(authOperations.login(value));
  };

  return <LoginForm onSubmit={handleSubmit} DisplayingErrorMessagesSchema={DisplayingErrorMessagesSchema}/>;
}
