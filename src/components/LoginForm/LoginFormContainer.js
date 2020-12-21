import React, { useState } from "react";
import LoginForm from "./LoginForm";

export default function LoginFormContainer() {
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
    <LoginForm
      inputName={inputName}
      handleChangeName={handleChangeName}
      inputEmail={inputEmail}
      handleChangeEmail={handleChangeEmail}
      inputPassword={inputPassword}
      handleChangePassword={handleChangePassword}
    />
  );
}
