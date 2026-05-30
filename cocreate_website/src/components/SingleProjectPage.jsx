import { React, useEffect, useState } from "react";
import { motion, easeInOut } from "motion/react";
import { Route, useParams } from "react-router-dom";

function SingleProjectPage({ base_URL }) {
  // here userParams extracts the projectId variable from the URL defined before as path in Route
  // Must check for undefined before using
  const { projectId } = useParams();
  const [projectName, setProjectName] = useState("");
  const [projectImageUrl, setProjectImageUrl] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [eventImageUrl, setEventImageUrl] = useState("");
  const [hasEvent, setHasEvent] = useState(false);

  const [projectExists, setProjectExists] = useState(true);

  useEffect(() => {
    const data = new FormData();
    data.append("project_id", projectId);

    fetch(base_URL + "/fetch_project_with_id.php", {
      method: "POST",
      body: data,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Upload failed: " + res.status);
        }
        return res.json();
      })
      .then((projectData) => {
        console.log(projectData);
        if (Object.entries(projectData).length > 0) {
          setProjectExists(true);
          setProjectName(projectData[projectId].project_name);
          setProjectDesc(projectData[projectId].project_description);
          setProjectImageUrl(base_URL + projectData[projectId].images[0]);

          if (projectData[projectId].has_events) {
            setEventDesc(projectData[projectId].events[0]);
            setEventImageUrl(base_URL + projectData[projectId].events_urls[0]);
            setHasEvent(true);
          } else {
            setHasEvent(false);
          }
        } else {
          setProjectExists(false);
        }
      })
      .catch((err) => {
        console.log("Error fetching project: " + err);
        alert("Error fetching project");
        setProjectExists(false);
      });
  }, []);
  if (projectExists) {
    return (
      <div className="singleProjectPage">
        {/* some fetch code to get all project data based on projectId */}
        <section className="projectDetails">
          <div className="projectTitle">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, rotate: 85 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
              style={{
                fontSize: "3rem",

                color: "#fecd1f",
              }}
            >
              ✴︎
            </motion.h3>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
            >
              {projectName}
            </motion.h2>
          </div>
          <img
            src={projectImageUrl}
            alt="Project Image"
            title="Project Image"
          />

          <p className="projectDescription">{projectDesc}</p>
        </section>

        {hasEvent && (
          <section className="projectDetails">
            <div className="projectTitle">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, rotate: 85 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: easeInOut,
                }}
                style={{
                  fontSize: "3rem",

                  color: "#fecd1f",
                }}
              >
                ✴︎
              </motion.h3>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: easeInOut,
                }}
              >
                Achievements &amp; Related Events
              </motion.h2>
            </div>
            <img src={eventImageUrl} alt="Event Image" title="Event Image" />

            <p>{eventDesc}</p>
          </section>
        )}
      </div>
    );
  } else {
    return (
      !projectExists && (
        <div id="noProject">
          There is no such project with projectID: {projectId}
        </div>
      )
    );
  }
}

export default SingleProjectPage;
