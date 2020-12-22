import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";

export default function RegistrationFormContainer() {
  const [inputName, setInputName] = useState("");

  const handleChangeName = (e) => {
    setInputName(e.target.value);
  };

  const [inputEmail, setInputEmail] = useState("");

  const handleChangeEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const [inputPassword, setInputPassword] = useState("");

  const handleChangePassword = (e) => {
    setInputPassword(e.target.value);
  };

  return (
    <RegistrationForm
      inputName={inputName}
      handleChangeName={handleChangeName}
      inputEmail={inputEmail}
      handleChangeEmail={handleChangeEmail}
      inputPassword={inputPassword}
      handleChangePassword={handleChangePassword}
    />
  );
}
