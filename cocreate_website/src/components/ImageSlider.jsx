import React, { useState } from "react";

export default function ImageSlider({ img, alt, text, subtext }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        width: "220px",
        height: "220px",
        margin: "40px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: isHovered ? "120px" : "40px",
          width: "800px",
          height: "180px",
          background: "#FDFCEA",
          borderRadius: "30px",
          padding: "30px 40px 30px 30px",
          transition: "0.4s ease",
          zIndex: 1,
          opacity: isHovered ? 1 : 0,
        }}
      >
        <h3
          style={{
            margin: 0,
            color: "#2C7E77",
            fontSize: "2rem",
          }}
        >
          {text}
        </h3>

        <p
          style={{
            color: "#747474",
            marginTop: "20px",
            lineHeight: 1.5,
          }}
        >
          {subtext}
        </p>
      </div>
      <img
        src={img}
        alt={alt}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "50%",
          border: "5px solid #FECD1F",
          zIndex: 2,
        }}
      />
    </div>
  );
}
