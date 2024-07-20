//U94140233
//import CompiledGallery from "components/Gallery.js";
import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import TestPage0 from "./components/TestPage0.js";
import TestPage1 from "./components/TestPage1.js";
import './App.css';

//app structure begins
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Test Page 0</Link>
            </li>
            <li>
              <Link to="/testpage1">Test Page 1</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<TestPage0 />} />
          <Route path="/testpage1" element={<TestPage1 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;