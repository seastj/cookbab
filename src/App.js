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
import AfterKko from "./pages/member/AfterKko";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/user/guest" element={<UserGuest></UserGuest>}></Route>
          <Route path="/mealset" element={<Mealset></Mealset>}></Route>
          <Route
            path="/mealset/edit"
            element={<MealsetEdit></MealsetEdit>}
          ></Route>

          <Route path="/onemeal" element={<Onemeal></Onemeal>}></Route>
          <Route
            path="/onemeal/view"
            element={<OnemealView></OnemealView>}
          ></Route>
          <Route path="/mealtotal" element={<Mealtotal></Mealtotal>}></Route>
          <Route path="/user" element={<User></User>}></Route>
          <Route path="member/kko" element={<AfterKko />}></Route>
          <Route path="/user/join" element={<UserJoin></UserJoin>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
