import React from "react";
import { motion } from "motion/react";
import gsap from "https://esm.sh/gsap";
import { useGSAP } from "https://esm.sh/@gsap/react?deps=react@19.1.0";

gsap.registerPlugin(useGSAP);

const { useRef } = React;
// useGSAP(() => {
//   gsap.to(".container1", { rotation: "+=360", duration: 3 });
// });
const About = () => {
  return (
    <div>
      <div class="container1">
        <motion.div class="text">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            class="text1"
          >
            {" "}
            CoCreate's mission is to drive transformative societal impact
            through human-centered assistive technology innovation by empowering
            interdisciplinary collaboration between scientists, engineers,
            designers, and people living with disabilities.
          </motion.p>
        </motion.div>
        <motion.div class="image">
          <motion.figure class="profile-figure">
            <motion.img
              whileInView={{
                scale: 1.1,
                border: "2px solid #fecd1f",
                padding: "5px",
                marginBottom: "5px",
              }}
              whileHover={{
                border: "3px solid #fecd1f",
                marginBottom: "3px",
                scale: 1.15,
              }}
              src="/assets/DrAreej.jpg"
              alt="About us"
              id="dr"
            />
            <motion.figcaption class="caption">
              Dr. Areej Al-Wabil, <br />
              CoCreate's Founder and Director
            </motion.figcaption>
          </motion.figure>
        </motion.div>
      </div>

      <div class="container2">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          class="text2"
        >
          Through a co-design approach and global partnerships, CoCreate fosters
          the development of inclusive, early-stage assistive technologies that
          address real-world challenges and enhance quality of life for diverse
          communities
        </motion.p>
      </div>
    </div>
  );
};

export default About;
