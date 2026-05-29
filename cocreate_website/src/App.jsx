import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import ProjectsPage from "./components/ProjectsPage";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  parsePath,
} from "react-router-dom";
import SingleProjectPage from "./components/SingleProjectPage";
import About from "./pages/About";
import Admin from "./pages/Admin";

function App() {
  const logoSrc = "/assets/hero.png";

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <BrowserRouter>
        <nav id="headerNav">
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

        <div style={{ flex: "1" }}>
          <Routes>
            <Route path="/" element={<Navigate to="/Home" replace />}></Route>
            <Route
              path="/Home"
              element={<HomePage logoSrc={logoSrc} />}
            ></Route>
            <Route path="/About" element={<About></About>}></Route>
            <Route path="/Projects" element={<ProjectsPage />}></Route>
            {/* We need to figure something out so that everytime a project is clicked
           we select it with its own id rather than generic selection. here we can use useParams() inside SingleProjectPage to get id of project*/}
            <Route
              path="/Projects/:projectId"
              element={<SingleProjectPage />}
            ></Route>
            <Route path="/Admin" element={<Admin />}></Route>
          </Routes>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
