import React from "react";
import { useEffect, useState } from "react";

import ProjectYearGroup from "./ProjectYearGroup";
function ProjectsPage({ base_URL }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(base_URL + "/fetch_projects.php")
      .then((response) => {
        return response.json();
      })
      .then((projectsJson) => {
        projectsJson = Object.entries(projectsJson);
        projectsJson.sort((a, b) => b[0] - a[0]);
        console.log(projectsJson);
        setProjects(projectsJson);
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }, []);
  return (
    <div style={{}}>
      {/* {console.log(projects)} */}
      {projects.map(([year, yearProjects]) => {
        return (
          <ProjectYearGroup
            key={year}
            year={year}
            projects={yearProjects}
            base_URL={base_URL}
          />
        );
      })}
    </div>
  );
}

export default ProjectsPage;
