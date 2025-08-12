import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Mealset from "./pages/mealset/Mealset";
import Onemeal from "./pages/onemeal/Onemeal";
import Mealtotal from "./pages/mealtotal/Mealtotal";
import User from "./pages/user/User";
import MealsetEdit from "./pages/mealset/MealsetEdit";
import OnemealView from "./pages/onemeal/OnemealView";
import UserGuest from "./pages/user/UserGuest";
import UserJoin from "./pages/user/UserJoin";
import AfterGoogle from "./pages/member/AfterGoogle";
import AfterKko from "./pages/member/AfterKko";
import { LoginProvider } from "./contexts/LoginProvider";
import LoginState from "./components/ui/LoginState";
import ProtectedRoute from "./components/ui/ProtectedRoute";
import { CookProvider } from "./contexts/cook/CookInfoProvider";

function App() {
  return (
    <div>
      <LoginProvider>
        <CookProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Index />}></Route>
              <Route
                path="/User/guest"
                element={<UserGuest></UserGuest>}
              ></Route>
              <Route
                path="/Mealset"
                element={
                  <ProtectedRoute>
                    <Mealset />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/Mealset/edit/:id"
                element={<MealsetEdit></MealsetEdit>}
              ></Route>

              <Route
                path="/Onemeal"
                element={
                  <ProtectedRoute>
                    <Onemeal />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/Onemeal/view/:id"
                element={<OnemealView></OnemealView>}
              ></Route>
              <Route
                path="/Mealtotal"
                element={
                  <ProtectedRoute>
                    <Mealtotal />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="/User" element={<User></User>}></Route>
              <Route
                path="/User/guest"
                element={<UserGuest></UserGuest>}
              ></Route>
              <Route path="/member/google" element={<AfterGoogle />}></Route>
              <Route path="member/kko" element={<AfterKko />}></Route>
              <Route path="/user/join" element={<UserJoin></UserJoin>}></Route>
              <Route path="/mypage" element={<LoginState />} />
            </Routes>
          </Router>
        </CookProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
