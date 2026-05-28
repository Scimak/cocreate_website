import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import ProjectsPage from "./components/ProjectsPage";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/Home" className="link">
            Home
          </Link>
          <Link to="/About" className="link">
            About
          </Link>
          <Link to="/Projects" className="link">
            Projects
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />}></Route>
          <Route path="/Home"></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Projects" element={<ProjectsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
