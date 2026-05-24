import React, { useState } from "react";
import heroImg from "../assets/hero.png";
var expand = function () {};

function ProjectTab() {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        padding: "15px",
        height: show ? "300px" : "30px",
        cursor: show ? "pointer" : "auto",
        overflow: "hidden",
        backgroundColor: show ? "rgb(255, 236, 236)" : "white",
        borderRadius: "15px",
        transition: "all 0.4s ease-in-out",
        width: "770px", //hardcoded width values
      }}
      onMouseLeave={(e) => setShow(false)}
    >
      <h2
        style={{
          fontSize: "2rem",
          textAlign: "left",
          width: "100%",
          margin: "0",
        }}
        onMouseEnter={() => {
          setShow(true);
        }}
      >
        Project Name
      </h2>
      {show && (
        <div
          style={{
            paddingTop: "30px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p
            style={{
              textAlign: "left",
              paddingRight: "30px",
              paddingLeft: "30px",
              paddingTop: "15px",
              width: "500px", //hardcoded width value
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis ducimus sapiente voluptatem odio voluptates rem est
            eius architecto esse! Hic voluptatem sapiente reiciendis harum
            veritatis accusantium inventore architecto sint nostrum, quia, ab
            sed culpa soluta iusto dolores eligendi ipsa explicabo
            exercitationem? Laborum architecto, animi id ipsa beatae.
          </p>

          <img
            src={heroImg}
            alt="Pretend this is a project"
            title="pretend this is an project image"
            style={{ float: "right" }}
            width="200px" //hardcoded width value
          />
        </div>
      )}
    </div>
  );
}

export default ProjectTab;
