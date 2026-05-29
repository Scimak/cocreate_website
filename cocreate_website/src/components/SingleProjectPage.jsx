import React from "react";
import { motion, easeInOut } from "motion/react";
import { Route, useParams } from "react-router-dom";

function SingleProjectPage() {
  // here userParams extracts the projectId variable from the URL defined before as path in Route
  // Must check for undefined before using
  const { projectId } = useParams();
  return (
    <div className="singleProjectPage">
      {/* some fetch code to get all project data based on projectId */}
      <section className="projectDetails">
        <div className="projectTitle">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, rotate: 85 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: easeInOut,
            }}
            style={{
              fontSize: "3rem",

              color: "#fecd1f",
            }}
          >
            ✴︎
          </motion.h3>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: easeInOut,
            }}
          >
            Project Name
          </motion.h2>
        </div>
        <img
          src="/assets/projectImg.png"
          alt="Project Image"
          title="Project Image"
        />

        <p className="projectDescription">
          Project Description: Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Minima ratione vero ullam impedit odio perferendis
          ea magni accusamus, officiis omnis corrupti eius, molestias labore aut
          culpa quibusdam quo reprehenderit vel. Iure deleniti assumenda dicta
          iusto debitis unde, cumque, et vitae cum eius excepturi harum. Dolorum
          ab sunt nesciunt temporibus.
        </p>
      </section>

      <section className="projectDetails">
        <div className="projectTitle">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, rotate: 85 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: easeInOut,
            }}
            style={{
              fontSize: "3rem",

              color: "#fecd1f",
            }}
          >
            ✴︎
          </motion.h3>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: easeInOut,
            }}
          >
            Achievements &amp; Related Events
          </motion.h2>
        </div>
        <img
          src="/assets/projectImg.png"
          alt="Event Image"
          title="Event Image"
        />

        <p>
          Event Description: Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. A nulla fugit eligendi, iste quis repudiandae quasi magnam sint
          nam autem fuga quidem nemo perspiciatis, voluptatum, accusantium nobis
          eius? Amet asperiores suscipit, officia alias provident impedit
          doloribus dignissimos tempora autem nisi commodi dicta beatae enim
          natus aperiam corrupti harum cum?
        </p>
      </section>
    </div>
  );
}

export default SingleProjectPage;
