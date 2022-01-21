import React from "react";
import "./App.css";
// import { useSelector } from "react-redux";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserInfo from "./pages/UserInfo";
import UserDetails from "./pages/UserDetails";
import FinalScreen from "./pages/FinalScreen";

function App() {
  // const { buisnessUser } = useSelector((state) => state.buisnessUser);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserInfo />} />
          <Route path="/user_details" element={<UserDetails />} />
          <Route path="/final_screen" element={<FinalScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
