import Password from "antd/es/input/Password";
import { LoginDispatchContext, LoginStateContext } from "./LoginContext";
import { useEffect, useReducer } from "react";

// 로컬스토리지
const localStorageKey = "myAppLoginState";

// 로컬스토리지에서 상태 읽기 함수
const getInitialState = () => {
  const stored = localStorage.getItem(localStorageKey);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }
  return null;
};

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
  const initialState = getInitialState() || initialLoginState;
  const [loginState, dispatch] = useReducer(LoginReducer, initialState);

  // 상태 변경시마다 localStorage에 저장
  useEffect(() => {
    if (loginState.isLogin) {
      localStorage.setItem(localStorageKey, JSON.stringify(loginState));
      console.log(localStorageKey);
    } else {
      localStorage.removeItem(localStorageKey);
    }
  }, [loginState]);

  return (
    <LoginStateContext.Provider value={loginState}>
      <LoginDispatchContext.Provider value={dispatch}>
        {children}
      </LoginDispatchContext.Provider>
    </LoginStateContext.Provider>
  );
}
