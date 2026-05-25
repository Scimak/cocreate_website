import React from "react";
import About from "./About";
import ProjectCards from "./ProjectCards";
import Hero from "./Hero";
export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <ProjectCards />
      <h2 class="catchphrase"> The future of technology is accessible</h2>
    </div>
  );
}
