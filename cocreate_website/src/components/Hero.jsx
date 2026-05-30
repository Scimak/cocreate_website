import React from "react";
import { motion } from "motion/react";
function Hero() {
  return (
    <motion.section
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="heroSection"
      id="heroSection"
    >
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        // animate={{ x: [0, 100, 0] }}
        // animate={{ x: [null, 100, 0] }}
        src="/assets/logo2.png"
        alt="CoCreate Logo"
      />

      <motion.h1
        initial={{ transform: "translateY(40)" }}
        whileInView={{
          color: ["#ffffff", "#fecd1f", "#ffffff", "#fecd1f"],
          transition: {
            color: {
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            },
            scale: { duration: 0.3 },
          },
        }}
        className="catchphrase2"
      >
        Next-gen creations
      </motion.h1>
    </motion.section>
  );
}
export default Hero;
