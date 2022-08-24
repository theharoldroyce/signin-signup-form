import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";


function App() {
  return (
    <Router>
       <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<ErrorPage/>} />
       </Routes>
  </Router>

  );
}

export default App;
