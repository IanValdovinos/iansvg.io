import HeadingTwo from "../HeadingTwo";
import ProjectCard from "../ProjectCard";
import PrimaryButton from "../PrimaryButton";

import styles from "./ProjectHighlights.module.css";

// Import Media
import ProjectImageOne from "../../assets/images/test_project_image.png";
import { useEffect, useState } from "react";
import api from "../../api/axios";

function ProjectHighlights() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get("/projects/highlighted");
        setProjects(response.data);
      } catch (error) {
        setError("Failed to fetch projects");
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Iterate over projects and create a list of ProjectCard components based on the fetched data
  const projectCards = projects.map((project) => (
    <ProjectCard
      key={project.id}
      title={project.title}
      coverImage={project.cover_image_url || ProjectImageOne}
    >
      {project.description || "No description available."}
    </ProjectCard>
  ));

  return (
    <>
      <HeadingTwo>Project Highlights</HeadingTwo>
      <div className={styles.projectsContainer}>{projectCards}</div>
      <PrimaryButton className={styles.projectsButton}>
        See All Projects
      </PrimaryButton>
    </>
  );
}

export default ProjectHighlights;
