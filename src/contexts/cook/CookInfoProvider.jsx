import {
  act,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { CookDispatchContext, CookStateContext } from "./CookInfoContext";
import { LoginStateContext } from "../LoginContext";

const STORAGE_KEY = "cooks";

// 로컬에서 레시피 전체 불러오기
const getInitialCooks = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

// 목록 갱신용
function cookReducer(state, action) {
  switch (action.type) {
    case "ADD_COOK":
      return [...state, action.payload];
    case "REMOVE_COOK":
      return state.filter(cook => cook.id !== action.id);
    case "EDIT_COOK":
      return state.map(cook =>
        cook.id === action.payload.id ? action.payload : cook,
      );
    case "CLEAR_ALL":
      return [];
    default:
      return state;
  }
}
export function CookProvider({ children }) {
  const [cooks, dispatch] = useReducer(cookReducer, getInitialCooks());
  const loginState = useContext(LoginStateContext);

  // cooks 상태가 바뀔 때마다 로컬스토리지 저장
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cooks));
  }, [cooks]);

  // 레시피(글) 추가 함수
  const addCook = cookData => {
    if (!loginState?.id) {
      alert("로그인 후 작성해주세요.");
      return;
    }
    const newCook = {
      ...cookData,
      id: Date.now().toString(),
      userId: loginState.id,
      nickname: loginState.nickname,
      createdAt: new Date().toISOString(),
    };
    dispatch({ type: "ADD_COOK", payload: newCook });
    return newCook.id;
  };

  // 삭제
  const removeCook = id => {
    dispatch({ type: "REMOVE_COOK", id });
  };
  const editCook = updatedCook => {
    dispatch({ type: "EDIT_COOK", payload: updatedCook });
  };

  return (
    <CookStateContext.Provider value={cooks}>
      <CookDispatchContext.Provider value={{ addCook, removeCook, editCook }}>
        {children}
      </CookDispatchContext.Provider>
    </CookStateContext.Provider>
  );
}
