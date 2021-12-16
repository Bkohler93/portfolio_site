import React from "react";
import projects from "../projectData";

export default function useFetchProject(title) {
  const [project, setProject] = React.useState(null);

  const fetchProject = (title) => {
    projects.map((project) => {
      if (title === project.title) {
        setProject(project);
      }
    });
  };

  React.useEffect(() => {
    fetchProject(title);
  }, []);

  return project;
}
