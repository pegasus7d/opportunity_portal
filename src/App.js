import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./Auth";
import Education from "./education";
import Skills from "./skills";
import Progressbar from "./components/Progressbar";

function App() {
  return (
    <div class="bg">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route exact path="education" element={<Education />} />
          <Route exact path="skills" element={<Skills />} />
          <Route exact path="Progressbar" element={<Progressbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
