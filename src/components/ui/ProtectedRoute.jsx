import React, { useContext } from "react";
import { LoginStateContext } from "../../contexts/LoginContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const loginState = useContext(LoginStateContext);

  if (!loginState?.isLogin) {
    // 로그인 안 되었으면 접근 차단 후 리다이렉트
    alert("로그인하셔야 이용가능한 서비스입니다.");
    return <Navigate to="/user/guest" replace />;
  }

  // 로그인 상태면 요청 컴포넌트 렌더링
  return children;
}

export default ProtectedRoute;
