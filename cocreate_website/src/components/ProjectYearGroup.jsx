import React from "react";
import ProjectTab from "./ProjectTab";

function ProjectYearGroup({ year = "2026" }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 0",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          padding: "0 40px",
          fontFamily: "Inter, serif",
          fontWeight: "lighter",
        }}
      >
        {year}
      </h2>
      <div>
        {/* potentially some fetch code here that fetches projects per year */}
        <ProjectTab />
        <ProjectTab />
        <ProjectTab />
        <ProjectTab />
        <ProjectTab />
        <ProjectTab />
        <ProjectTab />
      </div>
    </div>
  );
}

export default ProjectYearGroup;
