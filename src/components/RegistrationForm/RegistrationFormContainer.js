import React from "react";
import { useDispatch } from "react-redux";
import RegistrationForm from "./RegistrationForm";
import authOperations from "../../redux/auth/authOperations";
import * as Yup from "yup";

export default function RegistrationFormContainer() {
  const dispatch = useDispatch();
  const DisplayingErrorMessagesSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    password: Yup.string().min(8, "Too Short!").max(50, "Too Long!").required("Required"),
  });

  const handleSubmit = (values) => {
    dispatch(authOperations.register(values));
  };

  return <RegistrationForm handleSubmit={handleSubmit} DisplayingErrorMessagesSchema={DisplayingErrorMessagesSchema} />;
}
