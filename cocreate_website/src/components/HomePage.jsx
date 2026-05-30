import React from "react";
import About from "./About";
import ProjectCards from "./ProjectCards";
import Hero from "./Hero";
import { motion } from "motion/react";
export default function HomePage() {
  return (
    <div class="homePage">
      <Hero />
      <About />
      {/* <img src="/assets/divider.svg" alt="line" class="line" /> */}
      <motion.img
        initial={{ x: -30 }}
        whileInView={{ x: 30 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src="/assets/expandedDivider.svg"
        alt="line"
        className="line"
      />
      <ProjectCards />
      <motion.h2
        initial={{ transform: "translateY(40)" }}
        whileInView={{
          color: ["#000000", "#fecd1f", "#000000", "#fecd1f"],
          transition: {
            color: {
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            },
            scale: { duration: 0.3 },
          },
        }}
        class="catchphrase2"
      >
        The future of technology is accessible
      </motion.h2>
    </div>
  );
}
