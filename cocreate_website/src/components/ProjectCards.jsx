import React from "react";

const ProjectCards = () => {
  return (
    <div>
      <h2>Browse our latest projects</h2>

      <div class="Projectcontainer">
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
      </div>
    </div>
  );
};

export default ProjectCards;
