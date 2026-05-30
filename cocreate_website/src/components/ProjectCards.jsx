import React from "react";
import { motion } from "motion/react";
const ProjectCards = () => {
  return (
    <div class="projectCards">
      <motion.h2
        initial={{ transform: "translateY(40)" }}
        whileInView={{ transform: "translateY(-40px)" }}
        transition={{ type: "spring" }}
        whileHover={{ color: "#2c7e77", scale: 1.05 }}
        class="subhead"
      >
        Browse our latest projects
      </motion.h2>

      {/* <div class="Projectcontainer">
        <div class="textProject">
          <p>
            {" "}
            Project description CoCreate's mission is to drive transformative
            societal impact through human-centered assistive technology
          </p>
        </div>
        <div class="imageProject">
          <img src="/assets/projectImg.png" alt="Image of A project" />
        </div>
      </div> */}

      <div id="horizontalScrollSection" class="superContainer">
        <div class="projectContainer">
          <figure>
            <img
              class="imageProject"
              src="/assets/tangibleImg.png"
              alt="Image of Tangible geometry project"
            />
            <figcaption class="textProject">
              <strong>Tangible Geometry</strong> provides a learning system
              designed to improve geometry education for students with visual
              impairments. The conventional teaching of geometry relies mostly
              on visual representation, posing an obstacle for visually impaired
              students.
            </figcaption>
          </figure>
        </div>

        <div class="projectContainer">
          <figure>
            <img
              class="imageProject"
              src="/assets/storybookImg.png"
              alt="Image of digital storybook project"
            />
            <figcaption class="textProject">
              <strong>Digital Storybook</strong> research introduces an
              interactive digital storytelling framework to enhance Emotional
              Intelligence (EI) in children. By integrating virtual companions
              and Social-Emotional Learning (SEL) principles, the system fosters
              emotionally intelligent interactions through automated content
              analysis
            </figcaption>
          </figure>
        </div>
        <div class="projectContainer">
          <figure>
            <img
              class="imageProject"
              src="/assets/breathingMateImg.png"
              alt="Image of BreathingMate project"
            />
            <figcaption class="textProject">
              <strong>BreathingMate</strong> is an interactive, hand-shaped
              device designed to teach self-regulated breathing through visual
              guidance. It is intended for use in homes, schools, and healthcare
              settings to promote emotional and physiological well-being.{" "}
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
