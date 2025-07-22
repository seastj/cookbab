import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<div>home</div>}></Route>
          <Route path="/mealset" element={<div>mealset</div>}></Route>
          <Route path="/onemeal" element={<div>onemeal</div>}></Route>
          <Route path="/mealtotal" element={<div>mealtotal</div>}></Route>
          <Route path="/user" element={<div>user</div>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
