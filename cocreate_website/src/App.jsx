import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ProjectTab from "./components/ProjectTab";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProjectTab />
      <ProjectTab />
      <ProjectTab />
      <ProjectTab />
      <ProjectTab />
      <ProjectTab />
      <ProjectTab />
    </>
  );
}

export default App;
