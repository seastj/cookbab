import { createContext } from "react";

// 1.1. Todo 데이터를 위한 context
export const LoginStateContext = createContext(null);
// 1.2. Todo 데이터 업데이트를 위한 context
export const LoginDispatchContext = createContext(null);
