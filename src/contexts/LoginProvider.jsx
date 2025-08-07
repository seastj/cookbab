import Password from "antd/es/input/Password";
import { LoginDispatchContext, LoginStateContext } from "./LoginContext";
import { useReducer } from "react";

// 초기값 로그인전
const initialLoginState = {
  isLogin: false,
  provider: null,
  id: "",
  profileImage: "",
  pw: "",
  pwConfirm: "",
  email: "",
  nickname: "",
  introduction: "",
};

function LoginReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLogin: true, ...action.payload };
    case "LOGOUT":
      return initialLoginState;
    default:
      return state;
  }
}

export function LoginProvider({ children }) {
  const [loginState, dispatch] = useReducer(LoginReducer, initialLoginState);

  return (
    <LoginStateContext.Provider value={loginState}>
      <LoginDispatchContext.Provider value={dispatch}>
        {children}
      </LoginDispatchContext.Provider>
    </LoginStateContext.Provider>
  );
}
