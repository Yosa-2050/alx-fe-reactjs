import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./components/HomePage";
import './index.css'; 






export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        </Routes>
    </Router>
  );
}


