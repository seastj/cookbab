import React, { useContext } from "react";
import { LoginStateContext } from "../../contexts/LoginContext";
import { Navigate } from "react-router-dom";

function LoginState() {
  const loginState = useContext(LoginStateContext);

  if (loginState?.isLogin) {
    return <Navigate to="/user" />;
  } else {
    return <Navigate to="/user/guest" />;
  }
}

export default LoginState;
