import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserInfo from "./pages/UserInfo";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserInfo />} />
          <Route path="/user_details" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
