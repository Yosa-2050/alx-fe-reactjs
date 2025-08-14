 import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
 import Homepage from "./components/HomePage";
 import RecipeDetail from "./components/RecipeDetail";
import './App.css'; 


export default function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
     </Router>
  );
}


