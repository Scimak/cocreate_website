import React from "react";
import { useEffect, useState } from "react";

import ProjectYearGroup from "./ProjectYearGroup";
function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost/cocreate/fetch_projects.php")
      .then((response) => {
        return response.json();
      })
      .then((projectsJson) => {
        console.log(projectsJson);
        setProjects(projectsJson);
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }, []);
  return (
    <div style={{}}>
      {console.log(Object.entries(projects))}
      {Object.entries(projects).map(([year, yearProjects]) => {
        return (
          <ProjectYearGroup key={year} year={year} projects={yearProjects} />
        );
      })}
    </div>
  );
}

export default ProjectsPage;
