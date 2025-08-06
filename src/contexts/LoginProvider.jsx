import Password from "antd/es/input/Password";
import { LoginDispatchContext, LoginStateContext } from "./LoginContext";
import { useReducer } from "react";

// 초기값 로그인전
const initialLoginState = {
  isLogin: false,
  Provider: null,
  id: "",
  profilimage: "",
  pw: "",
  pwcomrirm: "",
  email: "",
  nickname: "",
  introduction: "",
};
function LoginReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
        ...action.payload,
      };
    case "LOGOUT":
      return initialLoginState;
    default:
      return state;
  }
}
// 2.3. Provider 생성
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
