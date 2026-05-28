import React from "react";

const About = () => {
  return (
    <div>
      <div class="container1">
        <div class="text">
          <p>
            {" "}
            CoCreate's mission is to drive transformative societal impact
            through human-centered assistive technology innovation by empowering
            interdisciplinary collaboration between scientists, engineers,
            designers, and people living with disabilities.
          </p>
        </div>
        <div class="image">
          <figure class="profile-figure">
            <img src="/assets/DrAreej.jpg" alt="About us" id="dr" />
            <figcaption class="caption">
              Dr. Areej Al-Wabil, <br />
              CoCreate's Founder and Director
            </figcaption>
          </figure>
        </div>
      </div>

      <div class="container2">
        <p class="text">
          Through a co-design approach and global partnerships, CoCreate fosters
          the development of inclusive, early-stage assistive technologies that
          address real-world challenges and enhance quality of life for diverse
          communities
        </p>
      </div>
    </div>
  );
};

export default About;
