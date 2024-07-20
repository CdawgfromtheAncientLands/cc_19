//U94140233
import Gallery from "./components/Gallery.js";
import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./components/HomePage.js";
import "./App.css";

//app structure begins
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/gallery">Gallery</Link>
            </li>

          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;