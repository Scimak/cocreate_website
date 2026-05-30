import React from "react";
import ProjectTab from "./ProjectTab";

function ProjectYearGroup({ year = "2026", projects = [], base_URL }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
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
      <div style={{ width: "100%", paddingRight: "2%" }}>
        {projects.map((project) => {
          return (
            <ProjectTab
              key={project.project_id}
              projectId={project.project_id}
              projectName={project.project_name}
              projectDescription={project.project_description}
              projectImages={project.images}
              base_URL={base_URL}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectYearGroup;
