import React from "react";
import { motion } from "motion/react";

function ParagraphUp({ text, className }) {
  const lines = text.split(".");

  return (
    <p className={className}>
      {lines.map((line, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          viewport={{ once: true }}
          style={{
            display: "block",
          }}
        >
          {line.trim()}
          {line && "."}
        </motion.span>
      ))}
    </p>
  );
}

export default ParagraphUp;
