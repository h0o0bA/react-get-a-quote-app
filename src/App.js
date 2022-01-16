import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
