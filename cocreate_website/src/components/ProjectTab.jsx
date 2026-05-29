import React, { useState } from "react";
import heroImg from "/assets/hero.png";
var expand = function () {};

function ProjectTab({
  projectId = 1,
  projectName = "Project Name",
  projectImages = ["/assets/hero.png"],
  imageText = "Project Image",
  projectDescription = "lorem",
}) {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        padding: "2%",
        height: show ? "300px" : "55px",
        cursor: show ? "pointer" : "auto",
        overflow: "hidden",
        backgroundColor: show ? "#FDFCEA" : "white",
        borderRadius: "15px",
        transition: "all 0.4s ease-in-out",
        width: "100%",
        maxWidth: "770px",
      }}
      onMouseLeave={(e) => setShow(false)}
      onMouseEnter={() => {
        setShow(true);
      }}
    >
      <h2
        style={{
          fontFamily: "Inter, serif",
          fontSize: "2rem",
          textAlign: "left",
          width: "100%",
          margin: "0",
          fontStyle: "italic",
          color: "grey",
          fontWeight: "lighter",
        }}
      >
        {projectName}
      </h2>
      {show && (
        <div
          style={{
            paddingTop: "30px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              textAlign: "left",
              paddingRight: "30px",
              paddingLeft: "30px",
              paddingTop: "15px",
              width: "60%",
              // maxWidth: "500px",
            }}
          >
            {projectDescription}
          </p>
          <img
            src={projectImages[0].image_url}
            alt={imageText}
            title={imageText}
            style={{
              width: "36%",
              // maxWidth: "200px",
              height: "auto",
              margin: "0 auto",
              borderRadius: "8px",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ProjectTab;
