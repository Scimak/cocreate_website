import React from "react";

import ProjectYearGroup from "./ProjectYearGroup";
function ProjectsPage() {
  return (
    <div>
      {/* perhaps some fetch code here to know what year we have projects in and stuff and then sort them */}
      <ProjectYearGroup year="2026" />
      <ProjectYearGroup year="2025" />
      <ProjectYearGroup year="2024" />
    </div>
  );
}

export default ProjectsPage;
