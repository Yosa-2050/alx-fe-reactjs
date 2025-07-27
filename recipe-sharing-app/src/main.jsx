
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import RecipeDetails from './components/RecipeDetails.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Router>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
    </Router>
  </React.StrictMode>,
);
