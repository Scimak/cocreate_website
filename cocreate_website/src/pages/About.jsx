import React from "react";
import { easeInOut, motion } from "motion/react";
import ParagraphUp from "../components/ParagraphUp";
import ImageSlider from "../components/ImageSlider";
import { useState } from "react";

function About() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const impacts = [
    "The Collaboration: We pair scientists and engineers from MIT with top-tier students at Alfaisal University.",
    "The Process: Fellows and co-designers spend a year ideating, prototyping, and refining early-stage assistive products.",
    "The Showcase: Each January, we celebrate the graduating cohort and reveal a new wave of disruptive solutions.",
  ];
  return (
    <div className="dAbout">
      <motion.div
        className="heroAbout"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.h1
          className=""
          style={{
            fontSize: "clamp(3rem, 12vw, 20rem)",
            fontWeight: "800",
            color: "#302f2f",
            margin: "0px 0 0 0",
            padding: "0",
            lineHeight: "0.9",
            letterSpacing: "-0.03em",
            textAlign: "center",
            width: "100%",
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.5 }}
        >
          ABOUT
        </motion.h1>

        <motion.div
          className="hoverText"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.5 }}
        >
          THE FUTURE OF <br />
          TECHNOLOGY IS <br />
          ACCESSIBLE
        </motion.div>
      </motion.div>

      <div className="pCenter">
        {/* <motion.h3
          style={{
            fontSize: "clamp(3rem, 12vw, 5rem)",
          }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: easeInOut,
          }}
        >
          ⟡
        </motion.h3> */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, rotate: 85 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: easeInOut,
          }}
          style={{
            fontSize: "5rem",

            color: "#fecd1f",
          }}
        >
          ✴︎
        </motion.h3>
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: easeInOut,
          }}
          className="h3About"
        >
          What <i>We</i> Do
        </motion.h3>

        <ParagraphUp
          className="pAbout"
          text="CoCreate, founded as a social enterprise in 2020, is an interdisciplinary innovation fellowship in Riyadh that unites MIT experts and local innovators. The fellowship is focused on empowering local designers, makers, and
engineers to collaboratively develop new assistive technologies alongside
local people living with disabilities (“co-designers”). Together, we transform brilliant concepts into life-changing prototypes."
        />
      </div>

      <div className="leaders">
        <motion.h3
          className="h3About"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeInOut }}
        >
          The <i>people</i> that <br />
          make this possible
        </motion.h3>
        <div className="sliders">
          <ImageSlider
            img="./src/imagesAbout/areej.jpeg"
            alt="An image of Dr. Areej Alwabil, the program director."
            text="Program Director"
            subtext="Director of Alfaisal's AI Research Center and the Human-Computer
                Interaction (HCI) Lab"
          />
          <ImageSlider
            img="./src/imagesAbout/mkh.jpeg"
            alt="An image of Mohamed Khaled Hasan, the program coordinator."
            text="Program Coordinator"
          />
        </div>
      </div>

      <div className="assistive">
        <motion.h3
          className="h3About"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeInOut }}
        >
          Rethinking <i>Assistive</i> Tech
        </motion.h3>
        <div className="assistiveContent">
          <ParagraphUp
            className="pAbout"
            text="We believe the best technology is built with the people who use it in
          mind."
          />

          <ParagraphUp
            className="pAbout"
            text="Humanistic co-design is the process of involving people who have
        disabilities in every stage of the innovation and development process
        for creating assistive technology products. Founded in 2020, our
        year-long fellowship empowers local makers and engineers to break
        boundaries."
          />
        </div>
      </div>

      <div className="impact">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, rotate: 85 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: easeInOut,
          }}
          style={{
            fontSize: "5rem",

            color: "#fecd1f",
          }}
        >
          ✴︎
        </motion.h3>
        <motion.h3
          className="h3About"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeInOut }}
        >
          Our <i>Impact</i> In Action
        </motion.h3>

        <div className="cardsAbout">
          <motion.ol initial={{ y: 10 }} whileInView={{ y: 0 }}>
            {impacts.map((impact, index) => (
              <motion.li
                key={impact}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  staggerChildren: 1,
                  ease: easeInOut,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {impact}
                {hoveredIndex === index && (
                  <motion.span
                    style={{
                      position: "absolute",
                      bottom: "-5px",
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "#fecd1f",
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </div>
  );
}

export default About;
