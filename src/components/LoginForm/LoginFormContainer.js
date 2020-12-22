import React, { useState } from "react";
import LoginForm from "./LoginForm";

export default function LoginFormContainer() {
  const [inputLogin, setInputLogin] = useState("");

  const handleChangeLogin = (e) => {
    setInputLogin(e.target.value);
  };

  const [inputPassword, setInputPassword] = useState("");

  const handleChangePassword = (e) => {
    setInputPassword(e.target.value);
  };

  return (
    <LoginForm
      inputLogin={inputLogin}
      handleChangeLogin={handleChangeLogin}
      inputPassword={inputPassword}
      handleChangePassword={handleChangePassword}
    />
  );
}
