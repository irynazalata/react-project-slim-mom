import React from "react";
import { useDispatch } from "react-redux";
import RegistrationForm from "./RegistrationForm";
import authOperations from "../../redux/auth/authOperations";

export default function RegistrationFormContainer() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(authOperations.register(values));
  };

  return <RegistrationForm handleSubmit={handleSubmit} />;
}
